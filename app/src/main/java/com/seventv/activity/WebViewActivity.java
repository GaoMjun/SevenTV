package com.seventv.activity;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import androidx.annotation.Nullable;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.appcompat.app.AppCompatActivity;
import androidx.webkit.WebViewAssetLoader;

import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import com.seventv.R;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

import butterknife.BindView;
import butterknife.ButterKnife;

public class WebViewActivity extends BaseActivity {

    private static final String EXTRA_ID = "video_id";

    @BindView(R.id.web_view)
    public WebView mWebView;
    @BindView(R.id.parent_layout)
    public ConstraintLayout mParentLayout;
    @BindView(R.id.content_layout)
    public LinearLayout mContentLayout;

    private String mId;

    public static Intent newIntent(Context context, String id) {
        Intent intent = new Intent(context, WebViewActivity.class);
        intent.putExtra(EXTRA_ID, id);
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

        mId = getIntent().getStringExtra(EXTRA_ID);

        WebViewAssetLoader assetLoader = new WebViewAssetLoader.Builder().addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this)).build();

        WebSettings webSettings = mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        mWebView.setWebViewClient(new WebViewClient() {

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return true;
            }

            @Override
            public WebResourceResponse shouldInterceptRequest (final WebView view, String url) {
                try {
                    String filename = FilenameUtils.getName(new URL(url).getPath());
                    InputStream inputStream = WebViewActivity.this.getAssets().open("avgle/"+filename);
                    if (inputStream != null) {
                        inputStream.close();

                        return assetLoader.shouldInterceptRequest(Uri.parse("https://appassets.androidplatform.net/assets/avgle/"+filename));
                    }
                } catch (Exception e) {
                }

                Uri uri = Uri.parse(url);
                String host = uri.getHost();

                if ((host != null) &&
                        (host.endsWith("avgle.com") ||
                        host.endsWith("qooqlevideo.com") ||
                        host.endsWith("gooqlevideo.xyz") ||
                        host.equals("universal.bigbuckbunny.workers.dev"))) {

//                    if (host.equals("avgle.com")) {
//                        try {
//                            String query = uri.getQuery();
//                            if (query == null) {
//                                query = "";
//                            } else {
//                                query = "&";
//                            }
//
//                            query += "xprotocol=" + uri.getScheme() + "&" + "xhost=" + host;
//
//                            url = new URI("https", "universal.bigbuckbunny.workers.dev", uri.getPath(), query, uri.getFragment()).toString();
//                            Log.d("WebViewActivity", url);
//                        } catch (URISyntaxException e) {
//                            e.printStackTrace();
//                        }
//                    }
                    return super.shouldInterceptRequest(view, url);
                }

                return new WebResourceResponse("text/plain", "UTF-8", null);
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

        mWebView.loadUrl("https://appassets.androidplatform.net/assets/avgle/avgle.html?id=" + mId);
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
