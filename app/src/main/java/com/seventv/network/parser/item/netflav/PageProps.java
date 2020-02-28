package com.seventv.network.parser.item.netflav;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class PageProps {
    private List<String> namespacesRequired;

    @JsonProperty("namespacesRequired")
    public List<String> getNamespacesRequired() { return namespacesRequired; }
    @JsonProperty("namespacesRequired")
    public void setNamespacesRequired(List<String> value) { this.namespacesRequired = value; }
}
