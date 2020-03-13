package com.seventv.network.parser.item.netflav;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Props {
    private boolean isServer;
    private InitialState initialState;
    private InitialProps initialProps;

    @JsonProperty("isServer")
    public boolean getIsServer() { return isServer; }
    @JsonProperty("isServer")
    public void setIsServer(boolean value) { this.isServer = value; }

    @JsonProperty("initialState")
    public InitialState getInitialState() { return initialState; }
    @JsonProperty("initialState")
    public void setInitialState(InitialState value) { this.initialState = value; }

    @JsonProperty("initialProps")
    public InitialProps getInitialProps() { return initialProps; }
    @JsonProperty("initialProps")
    public void setInitialProps(InitialProps value) { this.initialProps = value; }
}
