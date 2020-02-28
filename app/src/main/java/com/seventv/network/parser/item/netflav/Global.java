package com.seventv.network.parser.item.netflav;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class Global {
    private boolean isDesktop;
    private boolean isShowSideBar;
    private boolean isMobile;
    private boolean isMobileHeader;
    private String initialCountryCode;
    private String language;
    private String initialLanguage;
    private String locale;

    @JsonProperty("isDesktop")
    public boolean getIsDesktop() { return isDesktop; }
    @JsonProperty("isDesktop")
    public void setIsDesktop(boolean value) { this.isDesktop = value; }

    @JsonProperty("isShowSideBar")
    public boolean getIsShowSideBar() { return isShowSideBar; }
    @JsonProperty("isShowSideBar")
    public void setIsShowSideBar(boolean value) { this.isShowSideBar = value; }

    @JsonProperty("isMobile")
    public boolean getIsMobile() { return isMobile; }
    @JsonProperty("isMobile")
    public void setIsMobile(boolean value) { this.isMobile = value; }

    @JsonProperty("isMobileHeader")
    public boolean getIsMobileHeader() { return isMobileHeader; }
    @JsonProperty("isMobileHeader")
    public void setIsMobileHeader(boolean value) { this.isMobileHeader = value; }

    @JsonProperty("initialCountryCode")
    public String getInitialCountryCode() { return initialCountryCode; }
    @JsonProperty("initialCountryCode")
    public void setInitialCountryCode(String value) { this.initialCountryCode = value; }

    @JsonProperty("language")
    public String getLanguage() { return language; }
    @JsonProperty("language")
    public void setLanguage(String value) { this.language = value; }

    @JsonProperty("initialLanguage")
    public String getInitialLanguage() { return initialLanguage; }
    @JsonProperty("initialLanguage")
    public void setInitialLanguage(String value) { this.initialLanguage = value; }

    @JsonProperty("locale")
    public String getLocale() { return locale; }
    @JsonProperty("locale")
    public void setLocale(String value) { this.locale = value; }
}
