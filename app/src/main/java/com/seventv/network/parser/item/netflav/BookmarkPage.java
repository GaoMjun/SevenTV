package com.seventv.network.parser.item.netflav;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BookmarkPage {
    private String register;
    private String create;
    private String retrieve;
    private String namePlaceholder;
    private String passwordPlaceholder;
    private String description;
    private String actionCreate;
    private String actionRetrieve;
    private String hint;
    private String placeholder;
    private String nameError;
    private String nameLengthError;
    private String passwordError;
    private String passwordLengthError;
    private String logout;

    @JsonProperty("register")
    public String getRegister() { return register; }
    @JsonProperty("register")
    public void setRegister(String value) { this.register = value; }

    @JsonProperty("create")
    public String getCreate() { return create; }
    @JsonProperty("create")
    public void setCreate(String value) { this.create = value; }

    @JsonProperty("retrieve")
    public String getRetrieve() { return retrieve; }
    @JsonProperty("retrieve")
    public void setRetrieve(String value) { this.retrieve = value; }

    @JsonProperty("name_placeholder")
    public String getNamePlaceholder() { return namePlaceholder; }
    @JsonProperty("name_placeholder")
    public void setNamePlaceholder(String value) { this.namePlaceholder = value; }

    @JsonProperty("password_placeholder")
    public String getPasswordPlaceholder() { return passwordPlaceholder; }
    @JsonProperty("password_placeholder")
    public void setPasswordPlaceholder(String value) { this.passwordPlaceholder = value; }

    @JsonProperty("description")
    public String getDescription() { return description; }
    @JsonProperty("description")
    public void setDescription(String value) { this.description = value; }

    @JsonProperty("action_create")
    public String getActionCreate() { return actionCreate; }
    @JsonProperty("action_create")
    public void setActionCreate(String value) { this.actionCreate = value; }

    @JsonProperty("action_retrieve")
    public String getActionRetrieve() { return actionRetrieve; }
    @JsonProperty("action_retrieve")
    public void setActionRetrieve(String value) { this.actionRetrieve = value; }

    @JsonProperty("hint")
    public String getHint() { return hint; }
    @JsonProperty("hint")
    public void setHint(String value) { this.hint = value; }

    @JsonProperty("placeholder")
    public String getPlaceholder() { return placeholder; }
    @JsonProperty("placeholder")
    public void setPlaceholder(String value) { this.placeholder = value; }

    @JsonProperty("name_error")
    public String getNameError() { return nameError; }
    @JsonProperty("name_error")
    public void setNameError(String value) { this.nameError = value; }

    @JsonProperty("name_length_error")
    public String getNameLengthError() { return nameLengthError; }
    @JsonProperty("name_length_error")
    public void setNameLengthError(String value) { this.nameLengthError = value; }

    @JsonProperty("password_error")
    public String getPasswordError() { return passwordError; }
    @JsonProperty("password_error")
    public void setPasswordError(String value) { this.passwordError = value; }

    @JsonProperty("password_length_error")
    public String getPasswordLengthError() { return passwordLengthError; }
    @JsonProperty("password_length_error")
    public void setPasswordLengthError(String value) { this.passwordLengthError = value; }

    @JsonProperty("logout")
    public String getLogout() { return logout; }
    @JsonProperty("logout")
    public void setLogout(String value) { this.logout = value; }
}
