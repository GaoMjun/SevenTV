package com.seventv.network.api;

import com.seventv.network.NetworkBasic;

import io.reactivex.Observable;
import retrofit2.http.GET;
import retrofit2.http.Headers;
import retrofit2.http.Path;
import retrofit2.http.Query;

public interface JavbusAPI {

    String BASE_URL = "https://www.javbus.com/";

    JavbusAPI INSTANCE = NetworkBasic.getRetrofit(BASE_URL).create(JavbusAPI.class);

    @GET("/{id}")
    Observable<String> getGid(@Path(value = "id") String id);

    @GET("ajax/uncledatoolsbyajax.php?uc=0")
    @Headers("Referer: https://www.javbus.com/")
    Observable<String> getMagnetLinks(@Query("gid") String gid);

}
