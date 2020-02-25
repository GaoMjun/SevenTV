package com.seventv.network;

import android.util.Log;

import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import fuckdns.Fuckdns;
import okhttp3.Dns;

public class SelfDns implements Dns {
    @Override
    public List<InetAddress> lookup(String hostname) throws UnknownHostException {
        if (hostname == null) throw new UnknownHostException("hostname == null");

        String ips = Fuckdns.loopup(hostname, "114.114.114.114:53", "202.67.240.222:53", "doh.bigbuckbunny.xyz:47.90.117.50");

        List<InetAddress> addresses = new ArrayList<>();
        for (String ip : ips.split(";")) {
            addresses.add(InetAddress.getByName(ip));
        }

        return addresses;
    }
}
