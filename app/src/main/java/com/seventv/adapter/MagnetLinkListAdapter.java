package com.seventv.adapter;

import android.content.Intent;
import android.net.Uri;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.chad.library.adapter.base.BaseQuickAdapter;
import com.chad.library.adapter.base.BaseViewHolder;
import com.seventv.R;
import com.seventv.model.MagnetLink;

import java.util.List;

public class MagnetLinkListAdapter extends BaseQuickAdapter<MagnetLink, BaseViewHolder> {

    public MagnetLinkListAdapter(int layoutResId, @Nullable List<MagnetLink> data) {
        super(layoutResId, data);
    }

    @Override
    protected void convert(@NonNull BaseViewHolder helper, MagnetLink item) {
        helper.setText(R.id.magnet_link_title, item.getTitle());
        helper.setText(R.id.magnet_link_url, item.getLink());
        helper.setText(R.id.magnet_link_size, item.getSize());
        helper.setText(R.id.magnet_link_date, item.getDate());
        helper.setOnClickListener(R.id.magnet_link_card_view, v -> {
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(item.getLink()));
            mContext.startActivity(intent);
        });
    }
}
