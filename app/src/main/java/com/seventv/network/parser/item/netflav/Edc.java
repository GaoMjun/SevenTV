package com.seventv.network.parser.item.netflav;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Edc {
    private String all;
    private String week;
    private String month;
    private String week1;
    private String week2;
    private String week3;
    private String week4;
    private String week5;
    private String week6;
    private String month1;
    private String month2;
    private String month3;
    private String month4;
    private String month5;
    private String month6;

    @JsonProperty("all")
    public String getAll() { return all; }
    @JsonProperty("all")
    public void setAll(String value) { this.all = value; }

    @JsonProperty("week")
    public String getWeek() { return week; }
    @JsonProperty("week")
    public void setWeek(String value) { this.week = value; }

    @JsonProperty("month")
    public String getMonth() { return month; }
    @JsonProperty("month")
    public void setMonth(String value) { this.month = value; }

    @JsonProperty("week_1")
    public String getWeek1() { return week1; }
    @JsonProperty("week_1")
    public void setWeek1(String value) { this.week1 = value; }

    @JsonProperty("week_2")
    public String getWeek2() { return week2; }
    @JsonProperty("week_2")
    public void setWeek2(String value) { this.week2 = value; }

    @JsonProperty("week_3")
    public String getWeek3() { return week3; }
    @JsonProperty("week_3")
    public void setWeek3(String value) { this.week3 = value; }

    @JsonProperty("week_4")
    public String getWeek4() { return week4; }
    @JsonProperty("week_4")
    public void setWeek4(String value) { this.week4 = value; }

    @JsonProperty("week_5")
    public String getWeek5() { return week5; }
    @JsonProperty("week_5")
    public void setWeek5(String value) { this.week5 = value; }

    @JsonProperty("week_6")
    public String getWeek6() { return week6; }
    @JsonProperty("week_6")
    public void setWeek6(String value) { this.week6 = value; }

    @JsonProperty("month_1")
    public String getMonth1() { return month1; }
    @JsonProperty("month_1")
    public void setMonth1(String value) { this.month1 = value; }

    @JsonProperty("month_2")
    public String getMonth2() { return month2; }
    @JsonProperty("month_2")
    public void setMonth2(String value) { this.month2 = value; }

    @JsonProperty("month_3")
    public String getMonth3() { return month3; }
    @JsonProperty("month_3")
    public void setMonth3(String value) { this.month3 = value; }

    @JsonProperty("month_4")
    public String getMonth4() { return month4; }
    @JsonProperty("month_4")
    public void setMonth4(String value) { this.month4 = value; }

    @JsonProperty("month_5")
    public String getMonth5() { return month5; }
    @JsonProperty("month_5")
    public void setMonth5(String value) { this.month5 = value; }

    @JsonProperty("month_6")
    public String getMonth6() { return month6; }
    @JsonProperty("month_6")
    public void setMonth6(String value) { this.month6 = value; }
}
