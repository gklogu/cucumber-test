$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/lgounder/eclipse-workspace/cucumber/src/main/java/Features/addtocart.feature");
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
  "name": "Sauce demo add to cart",
  "description": "",
  "id": "sauce-demo-add-to-cart",
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
  "name": "User is already on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddtoCartStepDefinitions.user_is_already_on_the_login_page()"
});
formatter.result({
  "duration": 4242568146,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Add sauce labs products to cart",
  "description": "",
  "id": "sauce-demo-add-to-cart;add-sauce-labs-products-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User is already logged in with \"standard_user\" and \"secret_sauce\" credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User adds Fleece Jacket to cart",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User adds Onesie to cart",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User verifies the cart for the products added",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 32
    },
    {
      "val": "secret_sauce",
      "offset": 52
    }
  ],
  "location": "AddtoCartStepDefinitions.user_is_already_logged_in_with_and_credentials(String,String)"
});
formatter.result({
  "duration": 551500551,
  "status": "passed"
});
formatter.match({
  "location": "AddtoCartStepDefinitions.user_adds_Fleece_Jacket_to_cart()"
});
formatter.result({
  "duration": 654750169,
  "status": "passed"
});
formatter.match({
  "location": "AddtoCartStepDefinitions.user_adds_Onesie_to_cart()"
});
formatter.result({
  "duration": 66837710,
  "status": "passed"
});
formatter.match({
  "location": "AddtoCartStepDefinitions.user_verifies_the_cart_for_the_products_added()"
});
formatter.result({
  "duration": 5152790340,
  "status": "passed"
});
formatter.match({
  "location": "AddtoCartStepDefinitions.user_closes_the_browser()"
});
formatter.result({
  "duration": 225765632,
  "status": "passed"
});
});