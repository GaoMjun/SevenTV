package com.seventv.network.parser.item.netflav;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Common {
    private String locale;
    private Tabs tabs;
    private String search;
    private String searchPlaceholder;
    private SearchOption searchOption;
    private String loading;
    private String bookmark;
    private String bookmarked;
    private String unBookmark;
    private String hotIdols;
    private String trending;
    private String notFound;
    private String viewMore;
    private String showMore;
    private String showLess;
    private String filmography;
    private String amateur;
    private String filter;
    private String sorting;
    private String videos;
    private String findUs;
    private String emailHere;
    private String magnetTitle;
    private String magnetSize;
    private String magnetUpdated;
    private Player player;
    private ActressInfo actressInfo;
    private BookmarkPage bookmarkPage;
    private Edc edc;
    private String next;
    private String backToTop;
    private SlideUpNoti slideUpNoti;
    private Footer footer;
    private String close;
    private Summary summary;

    @JsonProperty("locale")
    public String getLocale() { return locale; }
    @JsonProperty("locale")
    public void setLocale(String value) { this.locale = value; }

    @JsonProperty("tabs")
    public Tabs getTabs() { return tabs; }
    @JsonProperty("tabs")
    public void setTabs(Tabs value) { this.tabs = value; }

    @JsonProperty("search")
    public String getSearch() { return search; }
    @JsonProperty("search")
    public void setSearch(String value) { this.search = value; }

    @JsonProperty("search_placeholder")
    public String getSearchPlaceholder() { return searchPlaceholder; }
    @JsonProperty("search_placeholder")
    public void setSearchPlaceholder(String value) { this.searchPlaceholder = value; }

    @JsonProperty("search_option")
    public SearchOption getSearchOption() { return searchOption; }
    @JsonProperty("search_option")
    public void setSearchOption(SearchOption value) { this.searchOption = value; }

    @JsonProperty("loading")
    public String getLoading() { return loading; }
    @JsonProperty("loading")
    public void setLoading(String value) { this.loading = value; }

    @JsonProperty("bookmark")
    public String getBookmark() { return bookmark; }
    @JsonProperty("bookmark")
    public void setBookmark(String value) { this.bookmark = value; }

    @JsonProperty("bookmarked")
    public String getBookmarked() { return bookmarked; }
    @JsonProperty("bookmarked")
    public void setBookmarked(String value) { this.bookmarked = value; }

    @JsonProperty("un_bookmark")
    public String getUnBookmark() { return unBookmark; }
    @JsonProperty("un_bookmark")
    public void setUnBookmark(String value) { this.unBookmark = value; }

    @JsonProperty("hot_idols")
    public String getHotIdols() { return hotIdols; }
    @JsonProperty("hot_idols")
    public void setHotIdols(String value) { this.hotIdols = value; }

    @JsonProperty("trending")
    public String getTrending() { return trending; }
    @JsonProperty("trending")
    public void setTrending(String value) { this.trending = value; }

    @JsonProperty("not_found")
    public String getNotFound() { return notFound; }
    @JsonProperty("not_found")
    public void setNotFound(String value) { this.notFound = value; }

    @JsonProperty("view_more")
    public String getViewMore() { return viewMore; }
    @JsonProperty("view_more")
    public void setViewMore(String value) { this.viewMore = value; }

    @JsonProperty("show_more")
    public String getShowMore() { return showMore; }
    @JsonProperty("show_more")
    public void setShowMore(String value) { this.showMore = value; }

    @JsonProperty("show_less")
    public String getShowLess() { return showLess; }
    @JsonProperty("show_less")
    public void setShowLess(String value) { this.showLess = value; }

    @JsonProperty("filmography")
    public String getFilmography() { return filmography; }
    @JsonProperty("filmography")
    public void setFilmography(String value) { this.filmography = value; }

    @JsonProperty("amateur")
    public String getAmateur() { return amateur; }
    @JsonProperty("amateur")
    public void setAmateur(String value) { this.amateur = value; }

    @JsonProperty("filter")
    public String getFilter() { return filter; }
    @JsonProperty("filter")
    public void setFilter(String value) { this.filter = value; }

    @JsonProperty("sorting")
    public String getSorting() { return sorting; }
    @JsonProperty("sorting")
    public void setSorting(String value) { this.sorting = value; }

    @JsonProperty("videos")
    public String getVideos() { return videos; }
    @JsonProperty("videos")
    public void setVideos(String value) { this.videos = value; }

    @JsonProperty("find_us")
    public String getFindUs() { return findUs; }
    @JsonProperty("find_us")
    public void setFindUs(String value) { this.findUs = value; }

    @JsonProperty("email_here")
    public String getEmailHere() { return emailHere; }
    @JsonProperty("email_here")
    public void setEmailHere(String value) { this.emailHere = value; }

    @JsonProperty("magnet_title")
    public String getMagnetTitle() { return magnetTitle; }
    @JsonProperty("magnet_title")
    public void setMagnetTitle(String value) { this.magnetTitle = value; }

    @JsonProperty("magnet_size")
    public String getMagnetSize() { return magnetSize; }
    @JsonProperty("magnet_size")
    public void setMagnetSize(String value) { this.magnetSize = value; }

    @JsonProperty("magnet_updated")
    public String getMagnetUpdated() { return magnetUpdated; }
    @JsonProperty("magnet_updated")
    public void setMagnetUpdated(String value) { this.magnetUpdated = value; }

    @JsonProperty("player")
    public Player getPlayer() { return player; }
    @JsonProperty("player")
    public void setPlayer(Player value) { this.player = value; }

    @JsonProperty("actress_info")
    public ActressInfo getActressInfo() { return actressInfo; }
    @JsonProperty("actress_info")
    public void setActressInfo(ActressInfo value) { this.actressInfo = value; }

    @JsonProperty("bookmark_page")
    public BookmarkPage getBookmarkPage() { return bookmarkPage; }
    @JsonProperty("bookmark_page")
    public void setBookmarkPage(BookmarkPage value) { this.bookmarkPage = value; }

    @JsonProperty("edc")
    public Edc getEdc() { return edc; }
    @JsonProperty("edc")
    public void setEdc(Edc value) { this.edc = value; }

    @JsonProperty("next")
    public String getNext() { return next; }
    @JsonProperty("next")
    public void setNext(String value) { this.next = value; }

    @JsonProperty("back_to_top")
    public String getBackToTop() { return backToTop; }
    @JsonProperty("back_to_top")
    public void setBackToTop(String value) { this.backToTop = value; }

    @JsonProperty("slide_up_noti")
    public SlideUpNoti getSlideUpNoti() { return slideUpNoti; }
    @JsonProperty("slide_up_noti")
    public void setSlideUpNoti(SlideUpNoti value) { this.slideUpNoti = value; }

    @JsonProperty("footer")
    public Footer getFooter() { return footer; }
    @JsonProperty("footer")
    public void setFooter(Footer value) { this.footer = value; }

    @JsonProperty("close")
    public String getClose() { return close; }
    @JsonProperty("close")
    public void setClose(String value) { this.close = value; }

    @JsonProperty("summary")
    public Summary getSummary() { return summary; }
    @JsonProperty("summary")
    public void setSummary(Summary value) { this.summary = value; }
}
