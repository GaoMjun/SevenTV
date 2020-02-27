package com.seventv.adapter;

import android.content.Intent;
import androidx.annotation.NonNull;
import android.widget.ImageView;
import com.bumptech.glide.Glide;
import com.bumptech.glide.load.engine.DiskCacheStrategy;
import com.chad.library.adapter.base.BaseQuickAdapter;
import com.chad.library.adapter.base.BaseViewHolder;
import com.seventv.R;
import com.seventv.activity.GalleryActivity;

import java.util.List;

public class ScreenshotAdapter extends BaseQuickAdapter<String, BaseViewHolder> {

    public ScreenshotAdapter(int layoutResId, List data) {
        super(layoutResId, data);
    }

    @Override
    protected void convert(@NonNull BaseViewHolder helper, String item) {

        Glide.with(mContext)
                .load(item)
                .diskCacheStrategy(DiskCacheStrategy.ALL)
                .into((ImageView) helper.getView(R.id.screenshot_image_view));

        helper.setOnClickListener(R.id.screenshot_image_view, v -> {
                Intent intent = GalleryActivity.newIntent(mContext, mData.toArray(new String[0]), helper.getAdapterPosition());
                mContext.startActivity(intent);
        });

    }
}