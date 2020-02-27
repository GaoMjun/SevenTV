package com.seventv.activity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import androidx.annotation.Nullable;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.appcompat.app.AppCompatActivity;

import android.view.View;
import android.view.ViewGroup;
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
        setContentView(R.layout.activity_webview);
        ButterKnife.bind(this);


        getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_FULLSCREEN);
        mId = getIntent().getStringExtra(EXTRA_ID);

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
                        String mimeType = "text/plain";
                        if (filename.endsWith(".css")) {
                            mimeType = "text/css";
                        } else if (filename.endsWith(".js")) {
                            mimeType = "application/javascript";
                        }
                        return new WebResourceResponse(mimeType, "UTF-8", new ByteArrayInputStream(IOUtils.toByteArray(inputStream)));
                    }
                } catch (Exception e) {
//                    e.printStackTrace();
                }

                if(url.contains("https://ads-a.juicyads.com/") && url.contains(".jpg")) {
                    return new WebResourceResponse("text/plain", "UTF-8", null);
                } else {
//                    try {
//                        Response response = HTTP_CLIENT.newCall(new Request.Builder().url(url).build()).execute();
//                        ResponseBody body = response.body();
//                        Log.d("WebViewActivity", body.contentType().toString());
//                        return new WebResourceResponse(body.contentType().type(), "UTF-8", body.byteStream());
//                    } catch (IOException e) {
//                        e.printStackTrace();
//                    }
//                    Log.d("WebViewActivity", url);
                    return super.shouldInterceptRequest(view, url);
                }
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

        mWebView.loadUrl("file:///android_asset/avgle/avgle.html?id=" + mId);
    }
}
