package com.seventv.network.parser.item.netflav;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Tabs {
    private String home;
    private String all;
    private String trending;
    private String recommended;
    private String censored;
    private String uncensored;
    private String chineseSub;
    private String chineseSubDesktop;
    private String actress;
    private String category;
    private String genre;
    private String actressInfo;
    private String searchResult;
    private String bookmark;
    private String search;
    private String javhd;
    private String lululu;
    private String the141Jj;
    private String bestPornSites;

    @JsonProperty("home")
    public String getHome() { return home; }
    @JsonProperty("home")
    public void setHome(String value) { this.home = value; }

    @JsonProperty("all")
    public String getAll() { return all; }
    @JsonProperty("all")
    public void setAll(String value) { this.all = value; }

    @JsonProperty("trending")
    public String getTrending() { return trending; }
    @JsonProperty("trending")
    public void setTrending(String value) { this.trending = value; }

    @JsonProperty("recommended")
    public String getRecommended() { return recommended; }
    @JsonProperty("recommended")
    public void setRecommended(String value) { this.recommended = value; }

    @JsonProperty("censored")
    public String getCensored() { return censored; }
    @JsonProperty("censored")
    public void setCensored(String value) { this.censored = value; }

    @JsonProperty("uncensored")
    public String getUncensored() { return uncensored; }
    @JsonProperty("uncensored")
    public void setUncensored(String value) { this.uncensored = value; }

    @JsonProperty("chinese_sub")
    public String getChineseSub() { return chineseSub; }
    @JsonProperty("chinese_sub")
    public void setChineseSub(String value) { this.chineseSub = value; }

    @JsonProperty("chinese_sub_desktop")
    public String getChineseSubDesktop() { return chineseSubDesktop; }
    @JsonProperty("chinese_sub_desktop")
    public void setChineseSubDesktop(String value) { this.chineseSubDesktop = value; }

    @JsonProperty("actress")
    public String getActress() { return actress; }
    @JsonProperty("actress")
    public void setActress(String value) { this.actress = value; }

    @JsonProperty("category")
    public String getCategory() { return category; }
    @JsonProperty("category")
    public void setCategory(String value) { this.category = value; }

    @JsonProperty("genre")
    public String getGenre() { return genre; }
    @JsonProperty("genre")
    public void setGenre(String value) { this.genre = value; }

    @JsonProperty("actress_info")
    public String getActressInfo() { return actressInfo; }
    @JsonProperty("actress_info")
    public void setActressInfo(String value) { this.actressInfo = value; }

    @JsonProperty("search_result")
    public String getSearchResult() { return searchResult; }
    @JsonProperty("search_result")
    public void setSearchResult(String value) { this.searchResult = value; }

    @JsonProperty("bookmark")
    public String getBookmark() { return bookmark; }
    @JsonProperty("bookmark")
    public void setBookmark(String value) { this.bookmark = value; }

    @JsonProperty("search")
    public String getSearch() { return search; }
    @JsonProperty("search")
    public void setSearch(String value) { this.search = value; }

    @JsonProperty("javhd")
    public String getJavhd() { return javhd; }
    @JsonProperty("javhd")
    public void setJavhd(String value) { this.javhd = value; }

    @JsonProperty("lululu")
    public String getLululu() { return lululu; }
    @JsonProperty("lululu")
    public void setLululu(String value) { this.lululu = value; }

    @JsonProperty("141jj")
    public String getThe141Jj() { return the141Jj; }
    @JsonProperty("141jj")
    public void setThe141Jj(String value) { this.the141Jj = value; }

    @JsonProperty("best_porn_sites")
    public String getBestPornSites() { return bestPornSites; }
    @JsonProperty("best_porn_sites")
    public void setBestPornSites(String value) { this.bestPornSites = value; }
}
