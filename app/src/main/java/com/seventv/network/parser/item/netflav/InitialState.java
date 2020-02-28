package com.seventv.network.parser.item.netflav;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class InitialState {
    private Actress test;
    private Actress all;
    private Actress censored;
    private Actress uncensored;
    private Actress video;
    private Actress chinese;
    private Actress trending;
    private Actress indexPage;
    private Actress actress;
    private Actress censoredActress;
    private Actress uncensoredActress;
    private Actress recent;
    private Actress related;
    private Search search;
    private Actress bookmark;
    private Actress bookmarkList;
    private Actress cache;
    private Global global;

    @JsonProperty("test")
    public Actress getTest() { return test; }
    @JsonProperty("test")
    public void setTest(Actress value) { this.test = value; }

    @JsonProperty("all")
    public Actress getAll() { return all; }
    @JsonProperty("all")
    public void setAll(Actress value) { this.all = value; }

    @JsonProperty("censored")
    public Actress getCensored() { return censored; }
    @JsonProperty("censored")
    public void setCensored(Actress value) { this.censored = value; }

    @JsonProperty("uncensored")
    public Actress getUncensored() { return uncensored; }
    @JsonProperty("uncensored")
    public void setUncensored(Actress value) { this.uncensored = value; }

    @JsonProperty("video")
    public Actress getVideo() { return video; }
    @JsonProperty("video")
    public void setVideo(Actress value) { this.video = value; }

    @JsonProperty("chinese")
    public Actress getChinese() { return chinese; }
    @JsonProperty("chinese")
    public void setChinese(Actress value) { this.chinese = value; }

    @JsonProperty("trending")
    public Actress getTrending() { return trending; }
    @JsonProperty("trending")
    public void setTrending(Actress value) { this.trending = value; }

    @JsonProperty("indexPage")
    public Actress getIndexPage() { return indexPage; }
    @JsonProperty("indexPage")
    public void setIndexPage(Actress value) { this.indexPage = value; }

    @JsonProperty("actress")
    public Actress getActress() { return actress; }
    @JsonProperty("actress")
    public void setActress(Actress value) { this.actress = value; }

    @JsonProperty("censoredActress")
    public Actress getCensoredActress() { return censoredActress; }
    @JsonProperty("censoredActress")
    public void setCensoredActress(Actress value) { this.censoredActress = value; }

    @JsonProperty("uncensoredActress")
    public Actress getUncensoredActress() { return uncensoredActress; }
    @JsonProperty("uncensoredActress")
    public void setUncensoredActress(Actress value) { this.uncensoredActress = value; }

    @JsonProperty("recent")
    public Actress getRecent() { return recent; }
    @JsonProperty("recent")
    public void setRecent(Actress value) { this.recent = value; }

    @JsonProperty("related")
    public Actress getRelated() { return related; }
    @JsonProperty("related")
    public void setRelated(Actress value) { this.related = value; }

    @JsonProperty("search")
    public Search getSearch() { return search; }
    @JsonProperty("search")
    public void setSearch(Search value) { this.search = value; }

    @JsonProperty("bookmark")
    public Actress getBookmark() { return bookmark; }
    @JsonProperty("bookmark")
    public void setBookmark(Actress value) { this.bookmark = value; }

    @JsonProperty("bookmarkList")
    public Actress getBookmarkList() { return bookmarkList; }
    @JsonProperty("bookmarkList")
    public void setBookmarkList(Actress value) { this.bookmarkList = value; }

    @JsonProperty("cache")
    public Actress getCache() { return cache; }
    @JsonProperty("cache")
    public void setCache(Actress value) { this.cache = value; }

    @JsonProperty("global")
    public Global getGlobal() { return global; }
    @JsonProperty("global")
    public void setGlobal(Global value) { this.global = value; }
}
