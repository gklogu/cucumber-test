$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/lgounder/git/repository/cucumber/src/main/java/Features/loginone.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Sauce demo new login",
  "description": "",
  "id": "sauce-demo-new-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 22,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 24,
  "name": "User is already on the saucedemo login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginOneStepDefinitions.user_is_already_on_the_saucedemo_login_page()"
});
formatter.result({
  "duration": 8932285352,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Sauce demo new login test",
  "description": "",
  "id": "sauce-demo-new-login;sauce-demo-new-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ],
      "line": 30
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User logs out and closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginOneStepDefinitions.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 450009746,
  "status": "passed"
});
formatter.match({
  "location": "LoginOneStepDefinitions.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 296084919,
  "status": "passed"
});
formatter.match({
  "location": "LoginOneStepDefinitions.user_logged_in_successfully()"
});
formatter.result({
  "duration": 16364896,
  "status": "passed"
});
formatter.match({
  "location": "LoginOneStepDefinitions.user_logs_out_and_closes_the_browser()"
});
formatter.result({
  "duration": 10431268411,
  "status": "passed"
});
});