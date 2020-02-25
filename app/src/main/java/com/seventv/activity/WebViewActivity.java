package com.seventv.activity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import com.seventv.R;
import com.seventv.network.NetworkBasic;

import org.apache.commons.io.FilenameUtils;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.TreeMap;

import butterknife.BindView;
import butterknife.ButterKnife;
import okhttp3.Headers;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import retrofit2.http.Url;

import static com.seventv.network.NetworkBasic.HTTP_CLIENT;

public class WebViewActivity extends BaseActivity {

    private static final String EXTRA_ID = "video_id";

    @BindView(R.id.web_view)
    public WebView mWebView;
    @BindView(R.id.parent_layout)
    public ConstraintLayout mParentLayout;
    @BindView(R.id.content_layout)
    public LinearLayout mContentLayout;

    private String mId;

    public static Intent newIntent(Context context, String id){
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
        mWebView.setWebViewClient(new WebViewClient(){
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return true;
            }

//            @Override
//            public WebResourceResponse shouldInterceptRequest (final WebView view, String url) {
//                Log.d("WebViewActivity", url);
//
//                if(url.contains("https://avgle.com/templates/frontend/avgle-main-ah.js")){
//                    String r = NetworkBasic.getSync(url);
//                    int idx = r.indexOf("':if(!window[_") + 2;
//                    String newResult = ";document.addEventListener('DOMContentLoaded', function(){setTimeout(function(){console.log('123');closeAd();}, 3000);});" + r.substring(0, idx) + "return false;" + r.substring(idx);
//                    InputStream data = new ByteArrayInputStream(newResult.getBytes(StandardCharsets.UTF_8));
//                    return new WebResourceResponse("text/plain", "UTF-8", data);
//                } else if(url.contains("https://ads-a.juicyads.com/") && url.contains(".jpg")){
//                    return new WebResourceResponse("text/plain", "UTF-8", null);
//                } else{
//                    try {
//                        Response response = HTTP_CLIENT.newCall(new Request.Builder().url(url).build()).execute();
//                        ResponseBody body = response.body();
//                        Log.d("WebViewActivity", body.contentType().toString());
//                        return new WebResourceResponse(body.contentType().type(), "UTF-8", body.byteStream());
//                    } catch (IOException e) {
//                        e.printStackTrace();
//                    }
////                    return super.shouldInterceptRequest(view, url);
//                    return null;
//                }
//            }

            @Nullable
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                String url = request.getUrl().toString();

                try {
                    String filename = FilenameUtils.getName(new URL(url).getPath());
                    InputStream inputStream = WebViewActivity.this.getAssets().open(filename);
                    if (inputStream != null) {
                        return new WebResourceResponse("text/plain", "UTF-8", inputStream);
                    }
                } catch (Exception e) {
//                    e.printStackTrace();
                }


                Log.d("WebViewActivity", url);
                return super.shouldInterceptRequest(view, request);
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
            public void onHideCustomView(){
                if(isVideoFullScreen){
                    mContentLayout.setVisibility(View.VISIBLE);
                    mParentLayout.removeView(customView);
                    customView = null;
                    isVideoFullScreen = false;
                }
            }

        });

        mWebView.loadUrl("file:///android_asset/avgle.html?id=" + mId);
    }

    private static Map<String, String> OkHttpHeadersToMap(Headers headers) {
        Map<String, String> result = new TreeMap<>(String.CASE_INSENSITIVE_ORDER);

        for (int i = 0, size = headers.size(); i < size; i++) {
            String name = headers.name(i).toLowerCase(Locale.US);
            String values = result.get(name);

            if (values == null) {
                values = "";
                result.put(name, values);
            }

            if (values.length() > 0) { values += "; "; }
            values += (headers.value(i));
        }
        return result;
    }

}
