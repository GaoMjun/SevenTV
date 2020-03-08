package com.seventv.fragment;

import com.chad.library.adapter.base.BaseQuickAdapter;
import com.chad.library.adapter.base.BaseViewHolder;
import com.seventv.R;
import com.seventv.adapter.MagnetLinkListAdapter;
import com.seventv.model.MagnetLink;
import com.seventv.network.api.JavbusAPI;
import com.seventv.network.parser.JavbusParser;

import java.util.List;

import io.reactivex.Observable;
import io.reactivex.Observer;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.annotations.NonNull;
import io.reactivex.observers.DisposableObserver;
import io.reactivex.schedulers.Schedulers;

public class MagnetLinkListFragment extends ListFragmentBase<MagnetLink> {
    private String mId;

    public MagnetLinkListFragment(String id) {
        mId = id;
    }

    @Override
    protected BaseQuickAdapter<MagnetLink, BaseViewHolder> newAdapter() {
        return new MagnetLinkListAdapter(R.layout.item_magnet_link, null);
    }

    @Override
    protected void loadMore() {
        JavbusAPI.INSTANCE.getGid(mId).subscribeOn(Schedulers.io())
                .flatMap((response) -> {
                    String gid = JavbusParser.parseGid(response);
                    if (gid.length() > 0) {
                        return JavbusAPI.INSTANCE.getMagnetLinks(gid);
                    } else {
                        return Observable.just("");
                    }
                })
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new DisposableObserver<String>() {
                    @Override
                    public void onNext(String html) {
                        if (html.length() > 0) {
                            List<MagnetLink> links = JavbusParser.parseMagnetLink("<table>"+html+"</table>");

                            mListAdapter.setNewData(links);
                            mListAdapter.setEnableLoadMore(false);
                            mRefreshLayout.setRefreshing(false);
                            mRefreshLayout.setEnabled(false);
                        }
                    }

                    @Override
                    public void onError(Throwable e) {
                        e.printStackTrace();
                        mRefreshLayout.setRefreshing(false);
                        mListAdapter.loadMoreFail();
                        mRefreshLayout.setEnabled(false);
                    }

                    @Override
                    public void onComplete() {}
                });
    }
}
