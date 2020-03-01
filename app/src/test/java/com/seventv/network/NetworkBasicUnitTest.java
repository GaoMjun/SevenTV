package com.seventv.network;

import org.junit.Test;

import java.io.IOException;

public class NetworkBasicUnitTest {
    @Test
    public void postSync() {
        try {
            String s = NetworkBasic.postSync("https://www.avple.video/api/source/8pg62b8rwjnkwgl");
            System.out.println(s);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void getRedirectLink() {
        String link = NetworkBasic.getRedirectLink("https://baidu.com/");
        System.out.println(link);
    }
}
