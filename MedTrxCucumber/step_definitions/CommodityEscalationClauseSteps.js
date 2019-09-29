
var commodityClauseObjects = require('../page-object-repo/object-repo/CommodityEscalationClause.json');
var contractsLandingPage = require('../page-object-repo/pages/ContractsLandingPage.js');
var commodityClausePage = require('../page-object-repo/pages/CommodityEscalationClausePage.js');
var clauseValidator = require('../page-object-repo/pages/CommodityEscalationClauseValidator.js');


let scenarioTimeout = 200 * 1000;


var {defineSupportCode} = require('cucumber');


defineSupportCode(function ({ setDefaultTimeout }) {
    setDefaultTimeout(60 * 1000);
});

defineSupportCode(function ({ Given, When, Then, After }) {
	
  Given(/^Login to Contracts$/, function (callback) {
	  contractsLandingPage.go2CommodityEM().then(callback).catch(callback);
     
    
  });

  When(/^I click on create button$/, function (callback) {
	  element(by.xpath(commodityClauseObjects.commodityclause.create)).click()  
	  .then(callback);
  });

  When(/^I enter values "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)" to Create Commodity Escalation clause$/, function (commodity, frequency, exchangeRate, market, internalComment, calculationDescription, currency, tolorence, uom, callback) {
	  
	   commodityClausePage.createEscalationClause(commodity, frequency, exchangeRate, market, internalComment, calculationDescription, currency, tolorence, uom ) .then(callback);
  });
  
  When(/^I click on save button$/, function (callback) {
	    element(by.xpath(commodityClauseObjects.commodityclause.save)).click() .then(callback);
	  });

  Then(/^I should create commodity escalation clause with "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)"$/, function (commodity, frequency, exchangeRate, market, internalComment, calculationDescription, currency,tolorence, uom, callback) {
	  clauseValidator.validateEscalationClause(commodity, frequency, exchangeRate, market, internalComment, calculationDescription, currency, tolerance, uom, callback)//.then(callback);
	  
		  setTimeout(callback, 1000);	 
  });

  
  
  
  When(/^I add a price "([^"]*)" validity from "([^"]*)" to "([^"]*)" to the "([^"]*)" commodity$/, function (price,validFrom,validTo,commodity,callback) {
	  commodityClausePage.addPrice(price,validFrom,validTo,commodity).then(callback);
	  });
  When(/^Search for price added commodity "([^"]*)" and click on view price$/, function (commodity,callback) {
	  commodityClausePage.veiwPrice(commodity).then(callback);
	  });
  Then(/^I should add commodity price "([^"]*)" from "([^"]*)" to "([^"]*)" to the "([^"]*)" commodity$/, function (price,validFrom,validTo,commodity,callback) {
	  clauseValidator.validateAddedPrice(price,validFrom,validTo,commodity, callback);
	 // element(by.xpath(commodityClauseObjects.commodityclause.close)).click() 
	  setTimeout(callback, 1000);
	  });
 
  
//Edit the commodity price  
  When(/^I search commodity "([^"]*)" to edit price$/, function (commodity,callback) {
	 
	  commodityClausePage.clickOnActions("edit",commodity).then(callback);
	  });
  When(/^I edit a price "([^"]*)" validity from "([^"]*)" to "([^"]*)" commodity$/, function (price,validFrom,validTo,callback) {
	  commodityClausePage.editPrice(price,validFrom,validTo).then(callback);
	  });
  Then(/^I should updated commodity price "([^"]*)" from "([^"]*)" to "([^"]*)" to the "([^"]*)" commodity$/, function (price,validFrom,validTo,commodity,callback) {
	  clauseValidator.validateAddedPrice(price,validFrom,validTo,commodity, callback);
	 // element(by.xpath(commodityClauseObjects.commodityclause.close)).click() 
	  setTimeout(callback, 1000);
	  });
  
  
  
  
  When(/^I edit values of commodity clause "([^"]*)" with values "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)"$/, function (commodity, frequency, exchangeRate, market, internalComment, calculationDescription, currency, uom,callback) {
	  commodityClausePage.editCommodityEscalationClause(commodity, frequency, exchangeRate, market, internalComment, calculationDescription, currency, uom).then(callback);
	  });
  When(/^Search for updated commodity "([^"]*)"$/, function (commodity,callback) {
	  commodityClausePage.searchCommodityClause(commodity).then(callback);
	  });
  Then(/^I should update commodity escalation clause "([^"]*)" with values "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)"$/, function (commodity, frequency, exchangeRate, market, internalComment, calculationDescription, currency, uom,callback) {
	  clauseValidator.validateEscalationClause(commodity, frequency, exchangeRate, market, internalComment, calculationDescription, currency, uom, callback);
	  setTimeout(callback, 1000);
	  });
 
  
  
  When(/^I deactivate "([^"]*)" commodity escalation clauses$/, function (commodity,callback) {
	  commodityClausePage.deactivateCommodityEscalationClause(commodity).then(callback);
	  });
  Then(/^I should deactivate "([^"]*)" commodity escalation clauses$/, function (commodity,callback) {
	  clauseValidator.validateDeactivatedClause(commodity, callback);
	  setTimeout(callback, 1000);
	  });
  
  
  When(/^I activate "([^"]*)" commodity escalation clauses$/, function (commodity,callback) {
	  commodityClausePage.activateCommodityEscalationClause(commodity).then(callback);
	  });
  Then(/^I should activate "([^"]*)" commodity escalation clauses$/, function (commodity,callback) {
	  clauseValidator.validateActivatedClause(commodity, callback);
	  setTimeout(callback, 1000);
	  });

  
  
  When(/^I delete "([^"]*)" commodity escalation clause$/, function (commodity,callback) {
	  commodityClausePage.deleteCommodityEscalationClause(commodity).then(callback);
	  });
  Then(/^I should deleted "([^"]*)" commodity escalation clause$/, function (commodity,callback) {
	  clauseValidator.validateDeletedClause(commodity, callback);
	  setTimeout(callback, 1000);
	  });
  
  
  
  
});