package com.seventv.network.parser;

import org.junit.Test;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class NetflavParserUnitTest {
    @Test
    public void parsePageUrl() {
        String cwd = System.getProperty("user.dir")+"/src/test/java/com/seventv/network/parser/";

        String html = "";
        try {
            html = new String(Files.readAllBytes(Paths.get(cwd + "/netflav.html")));
        } catch (IOException e) {
            e.printStackTrace();
        }

        String r = NetflavParser.parsePageUrl(html, "MIDE-726");

        System.out.println("===================================");
        System.out.println(r);
        System.out.println("===================================");
    }
}
