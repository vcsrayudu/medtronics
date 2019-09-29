
var headerObjects = require('../page-object-repo/object-repo/HeaderPageLocators.json');
var headerPage = require('../page-object-repo/pages/HeaderPage.js');
var headerValidator = require('../page-object-repo/pages/HeaderPageValidator.js');


let scenarioTimeout = 200 * 1000;


var {defineSupportCode} = require('cucumber');


defineSupportCode(function ({ setDefaultTimeout }) {
    setDefaultTimeout(60 * 1000);
});

defineSupportCode(function ({ Given, When, Then, After }) {
	
  Given(/^Open Amazon site$/, function (callback) {
	  
	  headerPage.landingPage().then(callback).catch(callback);
     
    
  });

  When(/^I click on Login$/, function (callback) {
	  headerPage.nagigateTologin().then(callback);
  });

  When('I enter user and passowrd {string}, {string} and {int}', function (username, password, order, callback) {
	  
	  headerPage.login(username,password) .then(callback);
  });
  
When('I enter user and passowrd {string} and {string}', function (username, password, callback) {
	  
	  headerPage.login(username,password) .then(callback);
  });

  
  When(/^I click on submit$/, function (callback) {
	    element(by.xpath()).click() .then(callback);
	  });

  Then('I should able to check my order count {string}, {string} and {int}', function (username, password, order,callback) {
	  headerValidator.validateOrderCount(order).then(callback);
	  
		 // setTimeout(callback, 1000);	 
  });
  
  Then('I should not able to login', function (callback) {
	  headerValidator.validateErrorMessage(callback).then(callback);
	  
		 // setTimeout(callback, 1000);	 
  });

  
   
  
  
});