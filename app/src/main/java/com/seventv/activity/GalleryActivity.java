package com.seventv.activity;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.os.Handler;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.viewpager.widget.PagerAdapter;
import androidx.viewpager.widget.ViewPager;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.widget.Toolbar;
import android.view.GestureDetector;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.AccelerateInterpolator;
import android.view.animation.AlphaAnimation;
import android.view.animation.Animation;
import android.view.animation.DecelerateInterpolator;
import android.widget.ProgressBar;
import android.widget.TextView;
import com.bumptech.glide.Glide;
import com.bumptech.glide.load.engine.DiskCacheStrategy;
import com.bumptech.glide.request.target.SimpleTarget;
import com.bumptech.glide.request.transition.Transition;
import com.github.chrisbanes.photoview.PhotoView;
import com.seventv.R;
import butterknife.BindView;
import butterknife.ButterKnife;

public class GalleryActivity extends BaseActivity {

    private static final boolean AUTO_HIDE = true;
    private static final int AUTO_HIDE_DELAY_MILLIS = 3000;
    private static final int UI_ANIMATION_DELAY = 300;
    private final Handler mHideHandler = new Handler();
    @BindView(R.id.gallery_pager)
    public ViewPager mPager;
    @BindView(R.id.toolbar_gallery)
    public Toolbar mToolbar;

    private final Runnable mHidePart2Runnable = new Runnable() {
        @SuppressLint("InlinedApi")
        @Override
        public void run() {
            mPager.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LOW_PROFILE
                    | View.SYSTEM_UI_FLAG_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                    | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION);
        }
    };

    Animation fadeIn = new AlphaAnimation(0, 1);
    private final Runnable mShowPart2Runnable = new Runnable() {
        @Override
        public void run() {
            // Delayed display of UI elements
            ActionBar actionBar = getSupportActionBar();
            if (actionBar != null) {
                actionBar.show();
            }
            mToolbar.startAnimation(fadeIn);
        }
    };
    Animation fadeOut = new AlphaAnimation(1, 0);
    GestureDetector detector;
    private boolean mVisible;
    private final Runnable mHideRunnable = new Runnable() {
        @Override
        public void run() {
            hide();
        }
    };
    private String[] imageUrls;

    {
        fadeIn.setInterpolator(new DecelerateInterpolator()); //add this
        fadeIn.setDuration(150);
    }

    {
        fadeOut.setInterpolator(new AccelerateInterpolator()); //and this
        fadeOut.setDuration(150);
    }

    static String EXTRA_URLS = "urls";
    static String EXTRA_POSITION = "position";

    public static Intent newIntent(Context context, String[] urls, int position){
        Intent intent = new Intent(context, GalleryActivity.class);
        intent.putExtra(EXTRA_URLS, urls);
        intent.putExtra(EXTRA_POSITION, position);
        return intent;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_gallery);

        ButterKnife.bind(this);

        setSupportActionBar(mToolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setDisplayShowHomeEnabled(true);

        detector = new GestureDetector(this, new GestureDetector.SimpleOnGestureListener() {
            @Override
            public boolean onSingleTapUp(MotionEvent e) {
                toggle();
                return true;
            }
        });

        mPager.setOnTouchListener((View v, MotionEvent event) -> {
                detector.onTouchEvent(event);
                return false;
        });

        {
            ActionBar actionBar = getSupportActionBar();
            if (actionBar != null) {
                actionBar.hide();
            }
            mToolbar.startAnimation(fadeOut);
            //mControlsView.setVisibility(View.GONE);
            mVisible = false;
            mHidePart2Runnable.run();
        }

        Bundle bundle = this.getIntent().getExtras();

        mPager.setAdapter(new ImageAdapter(this, imageUrls = bundle.getStringArray(EXTRA_URLS), this));
        mPager.setCurrentItem(bundle.getInt(EXTRA_POSITION));
        mPager.addOnPageChangeListener(new ViewPager.OnPageChangeListener() {
            @Override
            public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {
                updateIndicator();
            }

            @Override
            public void onPageSelected(int position) {
            }

            @Override
            public void onPageScrollStateChanged(int state) {
            }
        });
        updateIndicator();

    }

    private void updateIndicator() {
        delayedHide(AUTO_HIDE_DELAY_MILLIS);
        getSupportActionBar().setTitle((mPager.getCurrentItem() + 1) + " / " + (imageUrls.length));
        //mTextIndicator.setText((mPager.getCurrentItem() + 1) + " / " + (imageUrls.length));
    }

    public void toggle() {
        if (mVisible) {
            hide();
        } else {
            show();
            if (AUTO_HIDE) {
                delayedHide(AUTO_HIDE_DELAY_MILLIS);
            }
        }
    }

    private void hide() {
        hide(UI_ANIMATION_DELAY);
    }

    private void hide(int delay) {
        // Hide UI first
        ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) {
            actionBar.hide();
        }
        mToolbar.startAnimation(fadeOut);
        //mControlsView.setVisibility(View.GONE);
        mVisible = false;

        // Schedule a runnable to remove the status and navigation bar after a delay
        mHideHandler.removeCallbacks(mShowPart2Runnable);
        mHideHandler.postDelayed(mHidePart2Runnable, delay);
    }

    @SuppressLint("InlinedApi")
    private void show() {
        // Show the system bar
        mPager.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION);
        mVisible = true;

        // Schedule a runnable to display UI elements after a delay
        mHideHandler.removeCallbacks(mHidePart2Runnable);
        mHideHandler.postDelayed(mShowPart2Runnable, UI_ANIMATION_DELAY);
    }

    private void delayedHide(int delayMillis) {
        mHideHandler.removeCallbacks(mHideRunnable);
        mHideHandler.postDelayed(mHideRunnable, delayMillis);
    }


    @Override
    public boolean onSupportNavigateUp() {
        onBackPressed();
        return true;
    }

    private class ImageAdapter extends PagerAdapter {

        private final String[] imageUrls;
        private GalleryActivity mActivity;
        private LayoutInflater inflater;

        ImageAdapter(Context context, String[] imageUrls, GalleryActivity mActivity) {
            inflater = LayoutInflater.from(context);
            this.mActivity = mActivity;
            this.imageUrls = imageUrls;
        }

        @Override
        public void destroyItem(ViewGroup container, int position, Object object) {
            container.removeView((View) object);
        }

        @Override
        public int getCount() {
            return imageUrls.length;
        }

        @Override
        public Object instantiateItem(ViewGroup view, int position) {
            View imageLayout = inflater.inflate(R.layout.item_gallery, view, false);
            final PhotoView imageView = imageLayout.findViewById(R.id.image);
            final ProgressBar progressBar = imageLayout.findViewById(R.id.progress_bar);
            final TextView textView = imageLayout.findViewById(R.id.gallery_text_error);

            imageView.setOnClickListener(v -> mActivity.toggle());

            Glide.with(imageView.getContext().getApplicationContext())
                    .load(imageUrls[position])
                    .diskCacheStrategy(DiskCacheStrategy.ALL)
                    .into(new SimpleTarget<Drawable>() {
                        @Override
                        public void onResourceReady(@NonNull Drawable resource, @Nullable Transition<? super Drawable> transition) {
                            progressBar.setVisibility(View.GONE);
                            imageView.setImageDrawable(resource);
                        }

                        @Override
                        public void onLoadFailed(Drawable errorDrawable) {
                            super.onLoadFailed(errorDrawable);
                            textView.setText(getString(R.string.load_image_fail));
                        }
                    });

            view.addView(imageLayout, 0);
            return imageLayout;
        }

        @Override
        public boolean isViewFromObject(View view, Object object) { return view.equals(object); }

        @Override
        public void restoreState(Parcelable state, ClassLoader loader) { }

        @Override
        public Parcelable saveState() { return null; }
    }
}
