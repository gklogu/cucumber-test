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

Feature: Sauce demo new login

Background: 

Given User is already on the saucedemo login page

@RegressionTest
 
    Scenario: Sauce demo new login test
    
   
    When User enters username and password
    |problem_user|secret_sauce|
    And User clicks on the login button
    Then User logged in successfully
    And User logs out and closes the browser
    
 @SanityTest
    
    Scenario: Sauce demo invalid login test
    
    When User enters invalid username and password
    |test_user|password|
    And User clicks on the login button
    Then User login is not successful
    And User quit the browser

  