package com.seventv.network.parser.item.netflav;

import java.util.*;
import com.fasterxml.jackson.annotation.*;

public class ActressInfo {
    private String birthday;
    private String age;
    private String height;
    private String cup;
    private String breast;
    private String waist;
    private String hip;
    private String hometown;
    private String hobby;

    @JsonProperty("birthday")
    public String getBirthday() { return birthday; }
    @JsonProperty("birthday")
    public void setBirthday(String value) { this.birthday = value; }

    @JsonProperty("age")
    public String getAge() { return age; }
    @JsonProperty("age")
    public void setAge(String value) { this.age = value; }

    @JsonProperty("height")
    public String getHeight() { return height; }
    @JsonProperty("height")
    public void setHeight(String value) { this.height = value; }

    @JsonProperty("cup")
    public String getCup() { return cup; }
    @JsonProperty("cup")
    public void setCup(String value) { this.cup = value; }

    @JsonProperty("breast")
    public String getBreast() { return breast; }
    @JsonProperty("breast")
    public void setBreast(String value) { this.breast = value; }

    @JsonProperty("waist")
    public String getWaist() { return waist; }
    @JsonProperty("waist")
    public void setWaist(String value) { this.waist = value; }

    @JsonProperty("hip")
    public String getHip() { return hip; }
    @JsonProperty("hip")
    public void setHip(String value) { this.hip = value; }

    @JsonProperty("hometown")
    public String getHometown() { return hometown; }
    @JsonProperty("hometown")
    public void setHometown(String value) { this.hometown = value; }

    @JsonProperty("hobby")
    public String getHobby() { return hobby; }
    @JsonProperty("hobby")
    public void setHobby(String value) { this.hobby = value; }
}
