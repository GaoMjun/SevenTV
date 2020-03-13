package com.seventv.network.parser.item.netflav;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Player {
    private String views;
    private String actors;
    private String releaseDate;
    private String code;
    private String tags;
    private String previews;
    private String playNow;
    private String sponsored;

    @JsonProperty("views")
    public String getViews() { return views; }
    @JsonProperty("views")
    public void setViews(String value) { this.views = value; }

    @JsonProperty("actors")
    public String getActors() { return actors; }
    @JsonProperty("actors")
    public void setActors(String value) { this.actors = value; }

    @JsonProperty("release_date")
    public String getReleaseDate() { return releaseDate; }
    @JsonProperty("release_date")
    public void setReleaseDate(String value) { this.releaseDate = value; }

    @JsonProperty("code")
    public String getCode() { return code; }
    @JsonProperty("code")
    public void setCode(String value) { this.code = value; }

    @JsonProperty("tags")
    public String getTags() { return tags; }
    @JsonProperty("tags")
    public void setTags(String value) { this.tags = value; }

    @JsonProperty("previews")
    public String getPreviews() { return previews; }
    @JsonProperty("previews")
    public void setPreviews(String value) { this.previews = value; }

    @JsonProperty("play_now")
    public String getPlayNow() { return playNow; }
    @JsonProperty("play_now")
    public void setPlayNow(String value) { this.playNow = value; }

    @JsonProperty("sponsored")
    public String getSponsored() { return sponsored; }
    @JsonProperty("sponsored")
    public void setSponsored(String value) { this.sponsored = value; }
}
