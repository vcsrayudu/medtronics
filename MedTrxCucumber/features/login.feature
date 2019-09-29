Feature:  Amazon Website testing
    As a Member of amazon can order a goods
  
   Scenario Outline: Login functionality with valid user and password
        Given Open Amazon site 
        When I click on Login
        And I enter user and passowrd "<username>", "<password>" and <order> 
        Then I should able to check my order count "<username>", "<password>" and <order>
   Scenarios:
        |username|password|order|
        |9663003852|iloveindia|0|
        |9663003852|subbu|0|
   Scenario Outline: Login functionality with in valid password
        Given Open Amazon site 
        When I click on Login
        And I enter user and passowrd "<username>" and "<password>"
        Then I should not able to login
   Scenarios:
        |username|password|
        |9663003852|subbu|
        |rayudu|password|