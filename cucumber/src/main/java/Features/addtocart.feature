#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Sauce demo add to cart
  
Background:   
 
 Given User is already on the login page 


 Scenario: Add sauce labs products to cart

    Given User is already logged in with "standard_user" and "secret_sauce" credentials
    When User adds Fleece Jacket to cart
    And User adds Onesie to cart
    Then User verifies the cart for the products added
    And User closes the browser

  
