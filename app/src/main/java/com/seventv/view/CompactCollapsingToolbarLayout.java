package com.seventv.view;

import android.content.Context;
import com.google.android.material.appbar.CollapsingToolbarLayout;
import android.util.AttributeSet;
import android.view.View;

import androidx.core.view.WindowInsetsCompat;

import java.lang.reflect.Field;

public class CompactCollapsingToolbarLayout extends CollapsingToolbarLayout {
    public CompactCollapsingToolbarLayout(Context context) {
        this(context, null);
    }

    public CompactCollapsingToolbarLayout(Context context, AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public CompactCollapsingToolbarLayout(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);

        final int mode = View.MeasureSpec.getMode(heightMeasureSpec);

        WindowInsetsCompat lastInsets = null;

        try {
            Field field = getClass().getSuperclass().getDeclaredField("lastInsets");
            field.setAccessible(true);

            lastInsets = (WindowInsetsCompat) field.get(this);
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (lastInsets != null) {
            final int topInset = lastInsets != null ? lastInsets.getSystemWindowInsetTop() : 0;
            if (mode == View.MeasureSpec.UNSPECIFIED && topInset > 0) {
                // fix the bottom empty padding
                heightMeasureSpec = View.MeasureSpec.makeMeasureSpec(
                        getMeasuredHeight() - topInset, View.MeasureSpec.EXACTLY);
                super.onMeasure(widthMeasureSpec, heightMeasureSpec);
            }
        }
    }
}
