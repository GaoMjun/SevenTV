package com.seventv.activity;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.ServiceWorkerClient;
import android.webkit.ServiceWorkerController;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.LinearLayout;

import androidx.annotation.Nullable;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.webkit.WebViewAssetLoader;

import com.seventv.R;
import com.seventv.network.NetworkBasic;
import com.seventv.network.api.FembedAPI;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

import butterknife.BindView;
import butterknife.ButterKnife;

public class WebViewActivity extends BaseActivity {

    private static final String TAG = "WebViewActivity";

    private static final String EXTRA_URL = "url";

    @BindView(R.id.web_view)
    public WebView mWebView;
    @BindView(R.id.parent_layout)
    public ConstraintLayout mParentLayout;
    @BindView(R.id.content_layout)
    public LinearLayout mContentLayout;

    private String url;

    public static Intent newIntent(Context context, String url) {
        Intent intent = new Intent(context, WebViewActivity.class);
        intent.putExtra(EXTRA_URL, url);
        return intent;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);

        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);

        setContentView(R.layout.activity_webview);
        ButterKnife.bind(this);

        url = getIntent().getStringExtra(EXTRA_URL);

        WebViewAssetLoader assetLoader = new WebViewAssetLoader.Builder().setDomain("seven.tv")
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .build();

        WebSettings webSettings = mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        mWebView.setWebViewClient(new WebViewClient() {


            @Override
            public WebResourceResponse shouldInterceptRequest (final WebView view, String url) {
                Log.d(TAG, url);
                if (url.equals("https://seven.tv/assets/fembed/source.json")) {
                    String id = Uri.parse(WebViewActivity.this.url).getQueryParameter("id");

                    try {
                        String s = NetworkBasic.postSync(FembedAPI.BASE_URL_AVPLE + "source/" + id);
                        return new WebResourceResponse("application/json", "", new ByteArrayInputStream(s.getBytes()));
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }

                if (url.startsWith("https://seven.tv/assets/")) {
                    return  assetLoader.shouldInterceptRequest(Uri.parse(url));
                }

                return super.shouldInterceptRequest(view, url);
            }
        });

        mWebView.setWebChromeClient(new WebChromeClient(){

            private boolean isVideoFullScreen = false;
            private View customView;

            @Override
            public void onShowCustomView(View view, CustomViewCallback callback){
                if(!isVideoFullScreen){
                    customView = view;
                    view.setLayoutParams(new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT,
                            ViewGroup.LayoutParams.MATCH_PARENT));
                    mParentLayout.addView(view);
                    mContentLayout.setVisibility(View.GONE);
                    isVideoFullScreen = true;
                }

            }

            @Override
            public void onHideCustomView() {
                if(isVideoFullScreen){
                    mContentLayout.setVisibility(View.VISIBLE);
                    mParentLayout.removeView(customView);
                    customView = null;
                    isVideoFullScreen = false;
                }
            }

        });

        ServiceWorkerController.getInstance().setServiceWorkerClient(new ServiceWorkerClient() {
            @Nullable
            @Override
            public WebResourceResponse shouldInterceptRequest(WebResourceRequest request) {
                Log.d("ServiceWorkerController", request.getUrl().toString());

                if (request.getUrl().toString().startsWith("https://seven.tv/assets/fembed/download_start")) {
                    Uri download_url = Uri.parse(request.getUrl().getQueryParameter("url"));

                    Intent intent = new Intent(Intent.ACTION_VIEW, download_url);
                    intent.setDataAndType(download_url, "video/mp4");

                    WebViewActivity.this.mWebView.postDelayed(new Runnable() {
                        @Override
                        public void run() {
                            WebViewActivity.this.startActivity(intent);
                        }
                    }, 500);


                    return new WebResourceResponse("", "", null);
                }

                if (request.getUrl().toString().equals("https://seven.tv/assets/fembed/source.json")) {
                    String id = Uri.parse(WebViewActivity.this.url).getQueryParameter("id");

                    try {
                        String s = NetworkBasic.postSync(FembedAPI.BASE_URL_AVPLE + "source/" + id);
                        return new WebResourceResponse("application/json", "", new ByteArrayInputStream(s.getBytes()));
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }

                if (request.getUrl().toString().startsWith("https://seven.tv/assets/fembed/getRedirectLink")) {
                    String link = NetworkBasic.getRedirectLink(request.getUrl().getQueryParameter("url"));

                    if (link.length() > 0) {
                        Uri u = Uri.parse(link);
                        String h = u.getHost();

                        if (h.endsWith("o0-1.com") ||
                            h.endsWith("o0-2.com") ||
                            h.endsWith("o0-3.com") ||
                            h.endsWith("o0-4.com")) {

                            String query = u.getQuery();
                            if (query == null) {
                                query = "";
                            } else {
                                query = "&";
                            }

                            query += "xprotocol=" + u.getScheme() + "&" + "xhost=" + h;

                            u = new Uri.Builder()
                                    .scheme("https")
                                    .authority("universal.bigbuckbunny.workers.dev")
                                    .path(u.getPath())
                                    .query(query)
                                    .fragment(u.getFragment())
                                    .build();
                            try {
                                link = URLDecoder.decode(u.toString(), "UTF-8");
                            } catch (UnsupportedEncodingException e) {
                            }
                        }
                    }

                    return new WebResourceResponse("text/plain", "UTF-8", new ByteArrayInputStream(link.getBytes()));
                }

                if (request.getUrl().toString().startsWith("https://seven.tv/assets/")) {
                    return assetLoader.shouldInterceptRequest(request.getUrl());
                }


                return super.shouldInterceptRequest(request);
            }
        });

        mWebView.loadUrl(url);
    }

    @Override
    protected void onPause() {
        mWebView.onPause();
        mWebView.pauseTimers();

        super.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();

        mWebView.onResume();
        mWebView.resumeTimers();
    }

    @Override
    protected void onDestroy() {
        mWebView.destroy();

        super.onDestroy();
    }
}
