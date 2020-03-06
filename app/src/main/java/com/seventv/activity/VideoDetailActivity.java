package com.seventv.activity;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import androidx.annotation.NonNull;
import com.google.android.material.appbar.CollapsingToolbarLayout;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import androidx.core.graphics.drawable.DrawableCompat;
import androidx.core.widget.NestedScrollView;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.content.res.AppCompatResources;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.appcompat.widget.Toolbar;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.WindowManager;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;
import com.bumptech.glide.Glide;
import com.bumptech.glide.load.engine.DiskCacheStrategy;
import com.google.android.flexbox.AlignItems;
import com.google.android.flexbox.FlexDirection;
import com.google.android.flexbox.FlexboxLayoutManager;
import com.google.android.flexbox.JustifyContent;
import com.seventv.SevenTVApplication;
import com.seventv.model.SevenVideoSource;
import com.seventv.adapter.GenreAdapter;
import com.seventv.model.Idol;
import com.seventv.adapter.IdolAdapter;
import com.seventv.adapter.InfoAdapter;
import com.seventv.R;
import com.seventv.adapter.ScreenshotAdapter;
import com.seventv.model.Video;
import com.seventv.model.VideoDetail;
import com.seventv.model.Genre;
import com.seventv.model.Info;
import com.seventv.network.api.BestjavpornAPI;
import com.seventv.network.api.NetflavAPI;
import com.seventv.network.api.SevenAPI;
import com.seventv.network.parser.BestjavpornParser;
import com.seventv.network.parser.NetflavParser;
import com.seventv.network.parser.SevenParser;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import butterknife.BindView;
import butterknife.ButterKnife;
import io.reactivex.Observable;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.observers.DisposableObserver;
import io.reactivex.schedulers.Schedulers;

public class VideoDetailActivity extends BaseActivity {

    private static final String EXTRA_VIDEO = "video";

    @BindView(R.id.floating_action_button)
    FloatingActionButton mFloatingActionButton;
    @BindView(R.id.toolbar_layout_background)
    ImageView mToolbarLayoutBackground;
    @BindView(R.id.toolbar)
    Toolbar mToolbar;
    @BindView(R.id.progress_bar)
    ProgressBar mProgressBar;
    @BindView(R.id.video_content)
    NestedScrollView mVideoContent;
    @BindView(R.id.toolbar_layout)
    CollapsingToolbarLayout mCollapsingToolbarLayout;
    @BindView(R.id.infos_recycler_view)
    RecyclerView mInfosRecyclerView;
    @BindView(R.id.infos_empty_text)
    TextView mInfosEmptyTextView;
    @BindView(R.id.genres_recycler_view)
    RecyclerView mGenresRecyclerView;
    @BindView(R.id.genre_empty_text)
    TextView mGenresEmptyTextView;
    @BindView(R.id.idols_recycler_view)
    RecyclerView mIdolsRecyclerView;
    @BindView(R.id.idols_empty_text)
    TextView mIdolsEmptyTextView;
    @BindView(R.id.screenshots_recycler_view)
    RecyclerView mScreenshotsRecyclerView;
    @BindView(R.id.screenshots_empty_text)
    TextView mScreenshotsEmptyTextView;

    MenuItem mStarButton;

    private Video mVideo;
    private VideoDetail mVideoDetail;
    private String mCategory;
    private boolean mSourceReady = false;

    public static Intent newIntent(Context context, Video video){
        Intent intent = new Intent(context, VideoDetailActivity.class);
        intent.putExtra(EXTRA_VIDEO, video);
        return intent;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_video_detail);

        ButterKnife.bind(this);

        setSupportActionBar(mToolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        mVideo = (Video) getIntent().getSerializableExtra(EXTRA_VIDEO);
        mCategory = mVideo.getCategory();

        initRecyclerViews();
        getData();
    }

    private void getData(){
        String url = mVideo.getDetailUrl();
        String[] urlSplit = url.split("/");
        String language = getString(R.string.language_code);
        String id = urlSplit[5];

        SevenAPI.INSTANCE.getVideoDetail(language, mCategory, id)
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new DisposableObserver<String>() {
                    @Override
                    public void onNext(@NonNull String response){
                        mVideoDetail = SevenParser.parseVideoDetail(response, mCategory);
                        mVideo.setTitle(mVideoDetail.getTitle());
                        mVideo.setId(mVideoDetail.getId());
                        setUpDetail();
                    }

                    @Override
                    public void onError(@NonNull Throwable e){ Log.e("VideoDetailActivity", "Load detail ERROR: " + e);}

                    @Override
                    public void onComplete(){ }
                });
    }

    private void initRecyclerViews(){
        mInfosRecyclerView.setLayoutManager(new LinearLayoutManager(this));
        mInfosRecyclerView.setAdapter(new InfoAdapter(R.layout.item_info, new ArrayList<>()));

        mGenresRecyclerView.setLayoutManager(new FlexboxLayoutManager(this, FlexDirection.ROW));
        mGenresRecyclerView.setAdapter(new GenreAdapter(new ArrayList<>(), VideoDetailActivity.this));

        mScreenshotsRecyclerView.setLayoutManager(new LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false));
        mScreenshotsRecyclerView.setAdapter(new ScreenshotAdapter(R.layout.item_screenshot, new ArrayList()));

        mIdolsRecyclerView.setLayoutManager(new LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false));
        mIdolsRecyclerView.setAdapter(new IdolAdapter(R.layout.item_idol, new ArrayList(), mCategory));
    }

    private void setUpDetail(){
        if (mVideoDetail.getSevenVideoSource().needMoreSource()){
            Log.d("VideoDetailActivity", "try to load more source");
            LoadNetflav();
//            if(mCategory.equals(SevenAPI.CATEGORY_CHINESE)){
//                LoadNetflav();
//            } else {
//                LoadBestjavporn();
//            }
        } else {
            mSourceReady = true;
        }

        setUpFloatingActionButton();
        setUpCover();
        setUpInfos();
        setUpGenres();
        setUpScreenshots();
        setUpIdols();
        showDetail();
    }

    private void setUpFloatingActionButton(){
        mFloatingActionButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if (!mSourceReady){
                    Toast.makeText(VideoDetailActivity.this, getString(R.string.resource_loading), Toast.LENGTH_SHORT).show();
                    return;
                }
                if (!mVideoDetail.getSevenVideoSource().hasAvailableSource()){
                    Toast.makeText(VideoDetailActivity.this, getString(R.string.no_resource), Toast.LENGTH_SHORT).show();
                    return;
                }

                Map<String, List<SevenVideoSource.VideoUrl>> videoSources = mVideoDetail.getSevenVideoSource().getVideoSources();

                ArrayList<String> keys = new ArrayList<>();
                ArrayList<String> keys2 = new ArrayList<>();

                for (Map.Entry<String, List<SevenVideoSource.VideoUrl>> entry : videoSources.entrySet()) {
                    keys.add(entry.getKey());
                    keys2.add(SevenVideoSource.SOURCE_NAME.get(entry.getKey()));
                }

                if (keys2.size() > 1) {
                    AlertDialog alertDialog = new AlertDialog.Builder(VideoDetailActivity.this)
                            .setTitle("select one to play")
                            .setItems(keys2.toArray(new String[keys2.size()]), new DialogInterface.OnClickListener() {
                                @Override
                                public void onClick(DialogInterface dialog, int which) {
                                    String key = keys.get(which);
                                    gotoPlayVideo(key, videoSources.get(key));
                                }
                            }).create();
                    alertDialog.show();
                } else {
                    String key = keys.get(0);
                    gotoPlayVideo(key, videoSources.get(keys.get(0)));
                }
            }
        });
        mFloatingActionButton.bringToFront();
    }

    private void gotoPlayVideo(String key, List<SevenVideoSource.VideoUrl> videoUrls) {
        Intent intent = null;
        String[] split = videoUrls.get(0).url.split("/");
        String url = "https://seven.tv/assets";

        switch (key) {
            case SevenVideoSource.AVGLE:
                url += "/avgle/avgle.html?id=" + split[split.length - 2];
                intent = WebViewActivity.newIntent(VideoDetailActivity.this, url);

                break;
            case SevenVideoSource.FEMBED:
                url += "/fembed/fembed.html?id=" + split[split.length-1];
                intent = WebViewActivity.newIntent(VideoDetailActivity.this, url);
//                intent = VideoPlayActivity.newIntent(VideoDetailActivity.this, mVideoDetail);
            default:
                break;
        }
        intent = WebViewActivity.newIntent(VideoDetailActivity.this, url += "/avgle/avgle.html?id=bdec15a8cfe2e0763461");
        if (intent != null) {
            startActivity(intent);
        }
    }

    private void setUpCover(){
        mCollapsingToolbarLayout.setTitle(mVideoDetail.getTitle());
        Glide.with(mToolbarLayoutBackground.getContext().getApplicationContext())
                .load(mVideoDetail.getCoverUrl())
                .diskCacheStrategy(DiskCacheStrategy.ALL)
                .into(mToolbarLayoutBackground);
    }

    private void setUpInfos(){
        List<Info> infos = mVideoDetail.getInfos();
        if(infos.isEmpty()){
            mInfosEmptyTextView.setVisibility(View.VISIBLE);
            mInfosRecyclerView.setVisibility(View.GONE);
        } else {
            mInfosRecyclerView.setNestedScrollingEnabled(false);
            ((InfoAdapter) mInfosRecyclerView.getAdapter()).setNewData(infos);
        }
    }

    private void setUpGenres(){
        List<Genre> genres = mVideoDetail.getGenres();
        if (genres.isEmpty()){
            mGenresRecyclerView.setVisibility(View.GONE);
            mGenresEmptyTextView.setVisibility(View.VISIBLE);
        } else {
            ((FlexboxLayoutManager) mGenresRecyclerView.getLayoutManager()).setJustifyContent(JustifyContent.FLEX_START);
            ((FlexboxLayoutManager) mGenresRecyclerView.getLayoutManager()).setAlignItems(AlignItems.CENTER);;
            ((GenreAdapter) mGenresRecyclerView.getAdapter()).setNewData(genres);
        }
    }

    private void setUpScreenshots(){
        List<String> screenshotUrls = mVideoDetail.getScreenshotUrls();
        if(screenshotUrls.isEmpty()){
            mScreenshotsRecyclerView.setVisibility(View.GONE);
            mScreenshotsEmptyTextView.setVisibility(View.VISIBLE);
        } else {
            ((ScreenshotAdapter) mScreenshotsRecyclerView.getAdapter()).setNewData(screenshotUrls);
        }
    }

    private void setUpIdols(){
        List<Idol> idols = mVideoDetail.getIdols();
        if (idols.isEmpty()){
            mIdolsRecyclerView.setVisibility(View.GONE);
            mIdolsEmptyTextView.setVisibility(View.VISIBLE);
        } else {
            ((IdolAdapter) mIdolsRecyclerView.getAdapter()).setNewData(idols);
        }
    }

    private void showDetail(){
        mProgressBar.animate().setDuration(200).alpha(0).setListener(new AnimatorListenerAdapter() {
            @Override
            public void onAnimationEnd(Animator animation) {
                super.onAnimationEnd(animation);
                mProgressBar.setVisibility(View.GONE);
            }
        }).start();

        mVideoContent.setVisibility(View.VISIBLE);
        mVideoContent.setY(mVideoContent.getY() + 120);
        mVideoContent.setAlpha(0);
        mVideoContent.animate().translationY(0).alpha(1).setDuration(500).start();
    }

    @Override
    protected void onPause() {
        super.onPause();
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);
    }

    @Override
    protected void onResume() {
        super.onResume();
        getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                onBackPressed();
                return true;
        }

        return super.onOptionsItemSelected(item);
    }

    private void updateStarButton(boolean isFavorite){
        if(isFavorite){
            Drawable wrappedDrawable = DrawableCompat.wrap(AppCompatResources.getDrawable(VideoDetailActivity.this, R.drawable.ic_star));
            DrawableCompat.setTint(wrappedDrawable, Color.WHITE);
            mStarButton.setIcon(wrappedDrawable);
            mStarButton.setTitle(getString(R.string.remove_favorite));
        } else {
            Drawable wrappedDrawable = DrawableCompat.wrap(AppCompatResources.getDrawable(VideoDetailActivity.this, R.drawable.ic_star_border));
            DrawableCompat.setTint(wrappedDrawable, Color.WHITE);
            mStarButton.setIcon(wrappedDrawable);
            mStarButton.setTitle(getString(R.string.add_favorite));
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_detail, menu);

        mStarButton = menu.findItem(R.id.action_favorite);
        updateStarButton(SevenTVApplication.DB_HELPER.hasFavoriteVideo(mVideo));

        mStarButton.setOnMenuItemClickListener(item ->  {
            if(SevenTVApplication.DB_HELPER.hasFavoriteVideo(mVideo)){
                SevenTVApplication.DB_HELPER.deleteFavoriteVideo(mVideo);
                updateStarButton(false);
            } else{
                SevenTVApplication.DB_HELPER.insertFavoriteVideo(mVideo);
                updateStarButton(true);
            }
            return true;
        });

        return super.onCreateOptionsMenu(menu);
    }

    public String getCategory() {
        return mCategory;
    }

    private void LoadBestjavporn(){
        BestjavpornAPI.INSTANCE.searchVideo(mVideoDetail.getId()).subscribeOn(Schedulers.io())
                .flatMap((response) -> {
                    String url = BestjavpornParser.parsePageUrl(response);
                    if(url.length() > 0 && url.contains(mVideoDetail.getId().toLowerCase())){
                        return BestjavpornAPI.INSTANCE.getVideo(url);
                    } else {
                        return Observable.just("");
                    }
                })
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new DisposableObserver<String>() {
                    @Override
                    public void onNext(String s) {
                        if (s.length() > 0){
                            String url = BestjavpornParser.parseSource(s);
                            mVideoDetail.getSevenVideoSource().addSource(SevenVideoSource.BESTJAVPORN, url);
                        }
                    }

                    @Override
                    public void onError(Throwable e) {
                        e.printStackTrace();
                        mSourceReady = true;
                    }

                    @Override
                    public void onComplete() { mSourceReady = true; }
                });
    }

    private void LoadNetflav(){
        NetflavAPI.INSTANCE.searchVideo(mVideoDetail.getId()).subscribeOn(Schedulers.io())
                .flatMap((response) -> {
                    String url = NetflavParser.parsePageUrl(response, mVideoDetail.getId());
                    Log.d("VideoDetailActivity", url);
                    if(url.length() > 0){
                        return NetflavAPI.INSTANCE.getVideo(url);
                    } else {
                        return Observable.just("");
                    }
                })
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new DisposableObserver<String>() {
                    @Override
                    public void onNext(String s) {
                        if (s.length() > 0){
                            String url = NetflavParser.parseSource(s);
                            Log.d("VideoDetailActivity", url);
                            mVideoDetail.getSevenVideoSource().addSource(SevenVideoSource.FEMBED, url + " ");
                        }
                    }

                    @Override
                    public void onError(Throwable e) {
                        e.printStackTrace();
                        mSourceReady = true;
                    }

                    @Override
                    public void onComplete() { mSourceReady = true; }
                });
    }
}
