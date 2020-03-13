package com.seventv.network.parser.item.netflav;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NextData {
    private Props props;
    private String page;
    private Query query;
    private String buildID;

    @JsonProperty("props")
    public Props getProps() { return props; }
    @JsonProperty("props")
    public void setProps(Props value) { this.props = value; }

    @JsonProperty("page")
    public String getPage() { return page; }
    @JsonProperty("page")
    public void setPage(String value) { this.page = value; }

    @JsonProperty("query")
    public Query getQuery() { return query; }
    @JsonProperty("query")
    public void setQuery(Query value) { this.query = value; }

    @JsonProperty("buildId")
    public String getBuildID() { return buildID; }
    @JsonProperty("buildId")
    public void setBuildID(String value) { this.buildID = value; }
}
