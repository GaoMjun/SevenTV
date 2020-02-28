package com.seventv.network.parser.item.netflav;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Query {
    private String type;
    private String keyword;

    @JsonProperty("type")
    public String getType() { return type; }
    @JsonProperty("type")
    public void setType(String value) { this.type = value; }

    @JsonProperty("keyword")
    public String getKeyword() { return keyword; }
    @JsonProperty("keyword")
    public void setKeyword(String value) { this.keyword = value; }
}
