package com.seventv.network.parser.item.netflav;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Search {
    private List<Doc> docs;
    private long total;
    private long limit;
    private long page;
    private long pages;
    private boolean isLoading;
    private String keyword;
    private String type;

    @JsonProperty("docs")
    public List<Doc> getDocs() { return docs; }
    @JsonProperty("docs")
    public void setDocs(List<Doc> value) { this.docs = value; }

    @JsonProperty("total")
    public long getTotal() { return total; }
    @JsonProperty("total")
    public void setTotal(long value) { this.total = value; }

    @JsonProperty("limit")
    public long getLimit() { return limit; }
    @JsonProperty("limit")
    public void setLimit(long value) { this.limit = value; }

    @JsonProperty("page")
    public long getPage() { return page; }
    @JsonProperty("page")
    public void setPage(long value) { this.page = value; }

    @JsonProperty("pages")
    public long getPages() { return pages; }
    @JsonProperty("pages")
    public void setPages(long value) { this.pages = value; }

    @JsonProperty("isLoading")
    public boolean getIsLoading() { return isLoading; }
    @JsonProperty("isLoading")
    public void setIsLoading(boolean value) { this.isLoading = value; }

    @JsonProperty("keyword")
    public String getKeyword() { return keyword; }
    @JsonProperty("keyword")
    public void setKeyword(String value) { this.keyword = value; }

    @JsonProperty("type")
    public String getType() { return type; }
    @JsonProperty("type")
    public void setType(String value) { this.type = value; }
}
