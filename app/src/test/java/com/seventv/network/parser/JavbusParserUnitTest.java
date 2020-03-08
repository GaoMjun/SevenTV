package com.seventv.network.parser;

import com.seventv.model.MagnetLink;

import org.junit.Test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

public class JavbusParserUnitTest {
    @Test
    public void parseGid() {
        String cwd = System.getProperty("user.dir")+"/src/test/java/com/seventv/network/parser/";

        String html = "";
        try {
            html = new String(Files.readAllBytes(Paths.get(cwd + "/javbus.html")));
        } catch (IOException e) {
            e.printStackTrace();
        }

        String r = JavbusParser.parseGid(html);

        System.out.println("===================================");
        System.out.println(r);
        System.out.println("===================================");
    }

    @Test
    public void parseMagnetLink() {
        String cwd = System.getProperty("user.dir")+"/src/test/java/com/seventv/network/parser/";

        String html = "";
        try {
            html = new String(Files.readAllBytes(Paths.get(cwd + "/magnet_links.html")));
        } catch (IOException e) {
            e.printStackTrace();
        }

        List<MagnetLink> links = JavbusParser.parseMagnetLink("<table>"+html+"</table>");

        System.out.println("===================================");
        System.out.println(links);
        System.out.println("===================================");
    }
}
