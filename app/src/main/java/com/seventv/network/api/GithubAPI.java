package com.seventv.network.api;

import com.seventv.network.NetworkBasic;

import io.reactivex.Observable;
import retrofit2.http.GET;
import retrofit2.http.Headers;

public interface GithubAPI {

    String BASE_URL = "https://universal.bigbuckbunny.workers.dev/over-driver/SevenTV/master/";
    GithubAPI INSTANCE = NetworkBasic.getRetrofit(BASE_URL).create(GithubAPI.class);

    @GET("version.json")
    @Headers({"xprotocol: https", "xhost: raw.githubusercontent.com"})
    Observable<String> getVersion();
}
