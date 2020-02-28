package com.seventv.network.parser.item.netflav;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class InitialI18NStore {
    private Zh zh;

    @JsonProperty("zh")
    public Zh getZh() { return zh; }
    @JsonProperty("zh")
    public void setZh(Zh value) { this.zh = value; }
}
