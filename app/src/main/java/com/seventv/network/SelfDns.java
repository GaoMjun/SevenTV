package com.seventv.network;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import fuckdns.Fuckdns;
import okhttp3.Dns;

public class SelfDns implements Dns {

    private Map<String, List<InetAddress>> cache = new HashMap<>();

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
