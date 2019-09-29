#features/test.feature
Feature:  Commodity Escalation clause
    As a user of Contracts Administrator
    I should be able to perform commodity Escalation clause creation, edit, add price, delete activate and deactivate
    

   Scenario Outline: Create Commodity Escalation clause with different values
        Given Login to Contracts
        When I click on create button
        And I enter values "<commodity>", "<frequency>", "<exchangeRate>", "<market>", "<internalComment>", "<calculationDescription>", "<currency>", "<tolerance>" and "<uom>" to Create Commodity Escalation clause
        And I click on save button
        Then I should create commodity escalation clause with "<commodity>", "<frequency>", "<exchangeRate>", "<market>", "<internalComment>", "<calculationDescription>", "<currency>", "<tolerance>" and "<uom>"
   Scenarios:
        |commodity|frequency|exchangeRate|market|internalComment|calculationDescription|currency|tolerance|uom|
        |Nu gold wire|Weekly|CCRS1|NSE|Gold|Gold wire|USD|10|meter kelvin|
        |Onion skin paper|Daily|CCRS1|NSE|Paper material|Onion skin Paper material|USD|12|percent weight|
        |Lining papers|Monthly|CCRS1|BSE|Paper lining material|Lining Paper material|INR|15|volt ampere per pound|
   Scenario Outline: Add a price to already created commodity escalation clauses
        Given Login to Contracts
        When I add a price "<price>" validity from "<validFrom>" to "<validTo>" to the "<commodity>" commodity
        And Search for price added commodity "<commodity>" and click on view price
        Then I should add commodity price "<price>" from "<validFrom>" to "<validTo>" to the "<commodity>" commodity
     Scenarios:
        |commodity|price|validFrom|validTo|
        |Nu gold wire|20|04/23/2016|04/22/2017|
        |Onion skin paper|10|06/23/2016|07/22/2017|
        |Lining papers|5|07/23/2016|07/22/2017|
   Scenario Outline: Edit Commodity Escalation clause with different values
        Given Login to Contracts
        When I edit values of commodity clause "<commodity>" with values "<frequency>", "<exchangeRate>", "<market>", "<internalComment>", "<calculationDescription>", "<currency>" and "<uom>"
        And Search for updated commodity "<commodity>"
        Then I should update commodity escalation clause "<commodity>" with values "<frequency>", "<exchangeRate>", "<market>", "<internalComment>", "<calculationDescription>", "<currency>" and "<uom>"
   Scenarios:
        |commodity|frequency|exchangeRate|market|internalComment|calculationDescription|currency|uom|
        |Onion skin paper|Monthly|CCRS1|NSE|Skin material|Skin material1|INR|volt ampere per pound|
        |Nu gold wire|Daily|CCRS1|NSE|Nu gold wire meterial|Nu gold wire meterial1 |INR|meter kelvin|
  
  Scenario Outline: Edit price for already created commodity escalation clauses
  		Given Login to Contracts
        When I search commodity "<commodity>" to edit price
        And I edit a price "<price>" validity from "<validFrom>" to "<validTo>" commodity
        Then I should updated commodity price "<price>" from "<validFrom>" to "<validTo>" to the "<commodity>" commodity
  Scenarios:
        |commodity|price|validFrom|validTo|
        |Nu gold wire|20|04/23/2016|04/22/2017|
        |Onion skin paper|10|06/23/2016|07/22/2017|
        |Lining papers|5|07/23/2016|07/22/2017|
 
  Scenario Outline: Deactivate already created commodity escalation clauses
        Given Login to Contracts
        When I deactivate "<commodity>" commodity escalation clauses
        Then I should deactivate "<commodity>" commodity escalation clauses
  Scenarios:
        |commodity|
        |Nu gold wire|
        |Lining papers| 
 Scenario Outline: Activate already deactivated commodity escalation clauses
        Given Login to Contracts
        When I activate "<commodity>" commodity escalation clauses
        Then I should activate "<commodity>" commodity escalation clauses
  Scenarios:
        |commodity|
        |Nu gold wire|
        |Lining papers| 
  Scenario Outline: Delete already created commodity escalation clauses
        Given Login to Contracts
        When I delete "<commodity>" commodity escalation clause
        Then I should deleted "<commodity>" commodity escalation clause
  Scenarios:
        |commodity|
        |Nu gold wire|
        |Lining papers|
        |Onion skin paper|
 