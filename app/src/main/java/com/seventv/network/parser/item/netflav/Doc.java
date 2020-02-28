package com.seventv.network.parser.item.netflav;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Doc {
    private String preview;
    private List<String> previewImages;
    private String sourceDate;
    private List<String> actors;
    private String createdAt;
    private String videoID;
    private String titleEn;
    private String previewHP;
    private String title;
    private long views;
    private String titleZh;
    private String id;

    @JsonProperty("preview")
    public String getPreview() { return preview; }
    @JsonProperty("preview")
    public void setPreview(String value) { this.preview = value; }

    @JsonProperty("previewImages")
    public List<String> getPreviewImages() { return previewImages; }
    @JsonProperty("previewImages")
    public void setPreviewImages(List<String> value) { this.previewImages = value; }

    @JsonProperty("sourceDate")
    public String getSourceDate() { return sourceDate; }
    @JsonProperty("sourceDate")
    public void setSourceDate(String value) { this.sourceDate = value; }

    @JsonProperty("actors")
    public List<String> getActors() { return actors; }
    @JsonProperty("actors")
    public void setActors(List<String> value) { this.actors = value; }

    @JsonProperty("createdAt")
    public String getCreatedAt() { return createdAt; }
    @JsonProperty("createdAt")
    public void setCreatedAt(String value) { this.createdAt = value; }

    @JsonProperty("videoId")
    public String getVideoID() { return videoID; }
    @JsonProperty("videoId")
    public void setVideoID(String value) { this.videoID = value; }

    @JsonProperty("title_en")
    public String getTitleEn() { return titleEn; }
    @JsonProperty("title_en")
    public void setTitleEn(String value) { this.titleEn = value; }

    @JsonProperty("preview_hp")
    public String getPreviewHP() { return previewHP; }
    @JsonProperty("preview_hp")
    public void setPreviewHP(String value) { this.previewHP = value; }

    @JsonProperty("title")
    public String getTitle() { return title; }
    @JsonProperty("title")
    public void setTitle(String value) { this.title = value; }

    @JsonProperty("views")
    public long getViews() { return views; }
    @JsonProperty("views")
    public void setViews(long value) { this.views = value; }

    @JsonProperty("title_zh")
    public String getTitleZh() { return titleZh; }
    @JsonProperty("title_zh")
    public void setTitleZh(String value) { this.titleZh = value; }

    @JsonProperty("_id")
    public String getID() { return id; }
    @JsonProperty("_id")
    public void setID(String value) { this.id = value; }
}
