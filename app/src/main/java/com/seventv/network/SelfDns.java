package com.seventv.network;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import fuckdns.Fuckdns;
import okhttp3.Dns;

public class SelfDns implements Dns {

    private Map<String, List<InetAddress>> cache = new HashMap<>();

    public SelfDns() {
        try {
            cache.put("avgle.com", Arrays.asList(InetAddress.getByName("104.27.154.26"), InetAddress.getByName("104.27.155.26")));
            cache.put("www.avgle.com", Arrays.asList(InetAddress.getByName("104.27.154.26"), InetAddress.getByName("104.27.155.26")));
            cache.put("api.avgle.com", Arrays.asList(InetAddress.getByName("104.27.154.26"), InetAddress.getByName("104.27.155.26")));

            cache.put("bestjavporn.com", Arrays.asList(InetAddress.getByName("104.26.2.45"), InetAddress.getByName("104.26.3.45")));
            cache.put("video.bestjavporn.com", Arrays.asList(InetAddress.getByName("104.26.2.45"), InetAddress.getByName("104.26.3.45")));

            cache.put("www.fembed.com", Arrays.asList(InetAddress.getByName("104.18.44.23"), InetAddress.getByName("104.18.45.23")));

            cache.put("universal.bigbuckbunny.workers.dev", Arrays.asList(InetAddress.getByName("104.27.188.93"), InetAddress.getByName("104.27.189.93")));

            cache.put("javopen.co", Arrays.asList(InetAddress.getByName("104.28.30.203"), InetAddress.getByName("104.28.31.203")));

            cache.put("www.netflav.com", Arrays.asList(InetAddress.getByName("104.26.12.103"), InetAddress.getByName("104.26.13.103")));

//            cache.put("www.rapidvideo.com", Arrays.asList(InetAddress.getByName("104.26.2.45"), InetAddress.getByName("104.26.3.45")));

            cache.put("7mmtv.tv", Arrays.asList(InetAddress.getByName("104.18.38.251"), InetAddress.getByName("104.18.39.251")));

            cache.put("verystream.com", Arrays.asList(InetAddress.getByName("34.235.250.63")));
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<InetAddress> lookup(String hostname) throws UnknownHostException {
        if (hostname == null) throw new UnknownHostException("hostname == null");

        if (cache.containsKey(hostname)) {
            return cache.get(hostname);
        }

        String ips = Fuckdns.loopup(hostname, "114.114.114.114:53", "202.67.240.222:53", "doh.bigbuckbunny.xyz:47.90.117.50");

        List<InetAddress> addresses = new ArrayList<>();
        for (String ip : ips.split(";")) {
            addresses.add(InetAddress.getByName(ip));
        }

        cache.put(hostname, addresses);

        return addresses;
    }
}
