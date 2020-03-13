package com.seventv.network.parser.item.netflav;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InitialI18NStore {
    private Zh zh;

    @JsonProperty("zh")
    public Zh getZh() { return zh; }
    @JsonProperty("zh")
    public void setZh(Zh value) { this.zh = value; }
}
