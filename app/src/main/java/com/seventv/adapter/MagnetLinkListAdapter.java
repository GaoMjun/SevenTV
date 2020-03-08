package com.seventv.adapter;

import android.util.Log;

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
        helper.setOnClickListener(R.id.magnet_link_card_view, v -> {

            Log.d("MagnetLinkListAdapter", item.getLink());
        });
    }
}
