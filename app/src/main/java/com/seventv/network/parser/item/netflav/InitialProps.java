package com.seventv.network.parser.item.netflav;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class InitialProps {
    private InitialI18NStore initialI18NStore;
    private String initialLanguage;
    private Object i18NServerInstance;
    private PageProps pageProps;

    @JsonProperty("initialI18nStore")
    public InitialI18NStore getInitialI18NStore() { return initialI18NStore; }
    @JsonProperty("initialI18nStore")
    public void setInitialI18NStore(InitialI18NStore value) { this.initialI18NStore = value; }

    @JsonProperty("initialLanguage")
    public String getInitialLanguage() { return initialLanguage; }
    @JsonProperty("initialLanguage")
    public void setInitialLanguage(String value) { this.initialLanguage = value; }

    @JsonProperty("i18nServerInstance")
    public Object getI18NServerInstance() { return i18NServerInstance; }
    @JsonProperty("i18nServerInstance")
    public void setI18NServerInstance(Object value) { this.i18NServerInstance = value; }

    @JsonProperty("pageProps")
    public PageProps getPageProps() { return pageProps; }
    @JsonProperty("pageProps")
    public void setPageProps(PageProps value) { this.pageProps = value; }
}
