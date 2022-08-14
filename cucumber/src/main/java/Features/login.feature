Feature: Sauce Demo Login

Background: 

Given User is already on the login page 

#can be used to make comments in feature file

Scenario Outline: Sauce Demo Login test with valid user


When User enters valid "<user name>" and "<password>"
And clicks on the login button
Then User can login successfully

Examples:

|user name    |password    | 	
|standard_user|secret_sauce|
|remote_user  |secret_sauce|






