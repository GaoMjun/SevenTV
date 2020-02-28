package com.seventv.network.parser;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.seventv.network.api.NetflavAPI;
import com.seventv.network.parser.item.netflav.Doc;
import com.seventv.network.parser.item.netflav.NextData;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class NetflavParser {

    public static String parsePageUrl(String html, String id) {
        String videoId = "";

        Document doc = Jsoup.parse(html, NetflavAPI.BASE_URL);

        Element next_data = doc.getElementById("__NEXT_DATA__");
        if (next_data != null) {
            String type = next_data.attr("type");
            String json = next_data.html();

            if (type.equals("application/json") && json.length() > 0) {
                NextData data = null;

                ObjectMapper mapper = new ObjectMapper();
                try {
                    data = mapper.readValue(json, NextData.class);
                } catch (IOException e) {
                    e.printStackTrace();
                }

                if (data != null) {
                    List<Doc> docs = data.getProps().getInitialState().getSearch().getDocs();

                    List<Doc> collect = docs.stream().filter((Doc d) -> d.getTitle().toLowerCase().contains(id.toLowerCase())).collect(Collectors.toList());

                    if (collect.size() == 1) {
                        videoId = collect.get(0).getVideoID();
                    } else if (collect.size() > 1) {
                        List<Doc> collect2 = collect.stream().filter((Doc d) -> d.getTitle().contains("中文")).collect(Collectors.toList());
                        if (collect2.size() >= 1) {
                            videoId = collect2.get(0).getVideoID();
                        } else {
                            videoId = collect.get(0).getVideoID();
                        }
                    }
                }
            }
        }

        return videoId;
    }

    public static String parseSource(String html){
        String url = "";

        Document doc = Jsoup.parse(html, NetflavAPI.BASE_URL);
        Element e = doc.getElementById("iframe-block");
        if (e != null) {
            url = e.attr("src");
        }

        return url;
    }
}
