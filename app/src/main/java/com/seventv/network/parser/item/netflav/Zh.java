package com.seventv.network.parser.item.netflav;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Zh {
    private Common common;

    @JsonProperty("common")
    public Common getCommon() { return common; }
    @JsonProperty("common")
    public void setCommon(Common value) { this.common = value; }
}
