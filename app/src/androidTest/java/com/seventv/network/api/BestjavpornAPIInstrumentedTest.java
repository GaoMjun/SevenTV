package com.seventv.network.api;

import androidx.test.ext.junit.runners.AndroidJUnit4;

import com.seventv.model.SevenVideoSource;
import com.seventv.network.api.BestjavpornAPI;
import com.seventv.network.parser.BestjavpornParser;

import org.junit.Test;
import org.junit.runner.RunWith;

import io.reactivex.Observable;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.observers.DisposableObserver;
import io.reactivex.schedulers.Schedulers;

@RunWith(AndroidJUnit4.class)
public class BestjavpornAPIInstrumentedTest {
    @Test
    public void searchVideo() {
        String id = "SSNI-700";

        BestjavpornAPI.INSTANCE.searchVideo("id").subscribeOn(Schedulers.io())
                .flatMap((response) -> {
                    String url = BestjavpornParser.parsePageUrl(response);
                    if(url.length() > 0 && url.contains(id.toLowerCase())){
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
//                            mVideoDetail.getSevenVideoSource().addSource(SevenVideoSource.BESTJAVPORN, url);
                        }
                    }

                    @Override
                    public void onError(Throwable e) {
                        e.printStackTrace();
                    }

                    @Override
                    public void onComplete() {

                    }
                });
    }
}
