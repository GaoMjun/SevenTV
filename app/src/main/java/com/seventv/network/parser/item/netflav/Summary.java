package com.seventv.network.parser.item.netflav;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Summary {
    private String summary2019;
    private String viewSummary2019;
    private String summary2019_Desc;
    private String mostPopularActress;
    private String mostPopularVideoC;
    private String mostPopularVideoUNC;
    private String mostPopularVideoSub;
    private String mostPopularGenre;
    private String sorting;

    @JsonProperty("summary_2019")
    public String getSummary2019() { return summary2019; }
    @JsonProperty("summary_2019")
    public void setSummary2019(String value) { this.summary2019 = value; }

    @JsonProperty("view_summary_2019")
    public String getViewSummary2019() { return viewSummary2019; }
    @JsonProperty("view_summary_2019")
    public void setViewSummary2019(String value) { this.viewSummary2019 = value; }

    @JsonProperty("summary_2019_desc")
    public String getSummary2019Desc() { return summary2019_Desc; }
    @JsonProperty("summary_2019_desc")
    public void setSummary2019Desc(String value) { this.summary2019_Desc = value; }

    @JsonProperty("most_popular_actress")
    public String getMostPopularActress() { return mostPopularActress; }
    @JsonProperty("most_popular_actress")
    public void setMostPopularActress(String value) { this.mostPopularActress = value; }

    @JsonProperty("most_popular_video_c")
    public String getMostPopularVideoC() { return mostPopularVideoC; }
    @JsonProperty("most_popular_video_c")
    public void setMostPopularVideoC(String value) { this.mostPopularVideoC = value; }

    @JsonProperty("most_popular_video_unc")
    public String getMostPopularVideoUNC() { return mostPopularVideoUNC; }
    @JsonProperty("most_popular_video_unc")
    public void setMostPopularVideoUNC(String value) { this.mostPopularVideoUNC = value; }

    @JsonProperty("most_popular_video_sub")
    public String getMostPopularVideoSub() { return mostPopularVideoSub; }
    @JsonProperty("most_popular_video_sub")
    public void setMostPopularVideoSub(String value) { this.mostPopularVideoSub = value; }

    @JsonProperty("most_popular_genre")
    public String getMostPopularGenre() { return mostPopularGenre; }
    @JsonProperty("most_popular_genre")
    public void setMostPopularGenre(String value) { this.mostPopularGenre = value; }

    @JsonProperty("sorting")
    public String getSorting() { return sorting; }
    @JsonProperty("sorting")
    public void setSorting(String value) { this.sorting = value; }
}
