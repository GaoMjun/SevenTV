package com.seventv.network.parser.item.netflav;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SlideUpNoti {
    private String title;
    private String content;
    private String button;
    private String cancel;

    @JsonProperty("title")
    public String getTitle() { return title; }
    @JsonProperty("title")
    public void setTitle(String value) { this.title = value; }

    @JsonProperty("content")
    public String getContent() { return content; }
    @JsonProperty("content")
    public void setContent(String value) { this.content = value; }

    @JsonProperty("button")
    public String getButton() { return button; }
    @JsonProperty("button")
    public void setButton(String value) { this.button = value; }

    @JsonProperty("cancel")
    public String getCancel() { return cancel; }
    @JsonProperty("cancel")
    public void setCancel(String value) { this.cancel = value; }
}
