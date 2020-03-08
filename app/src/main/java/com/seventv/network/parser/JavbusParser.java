package com.seventv.network.parser;

import com.seventv.model.MagnetLink;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class JavbusParser {
    public static String parseGid(String html) {
        Matcher matcher = Pattern.compile("gid *= *[0-9]{11}").matcher(html);
        if (matcher.find()) {
            return matcher.group().replaceAll(" ", "").split("=")[1];
        } else {
            return "";
        }
    }

    public static List<MagnetLink> parseMagnetLink(String html) {
        List<MagnetLink> links = new ArrayList<>();

        Document doc = Jsoup.parse(html);
        for (Element row : doc.select("tr")) {
            Elements cols = row.select("td");
            if (cols.size() != 3) {
                continue;
            }

            MagnetLink link = new MagnetLink();

            Element a = cols.get(0).selectFirst("a");

            link.setLink(a.attr("href"));
            link.setTitle(a.html());
            link.setSize(cols.get(1).selectFirst("a").html());
            link.setDate(cols.get(2).selectFirst("a").html());

            links.add(link);
        }

        return links;
    }
}
