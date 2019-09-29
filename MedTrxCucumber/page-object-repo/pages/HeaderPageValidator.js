/**
 * Validator method to access the page objects Created by I340190
 */

var Q = require('q');

var chai = require('chai');
chai.config.includeStack = true;
var chaiAsPromised = require('chai-as-promised');


chai.use(chaiAsPromised);
var expect = chai.expect;
var should = chai.should();

chai.use(function (_chai, _) {
	  _chai.Assertion.addMethod('withMessage', function (msg) {
	    _.flag(this, 'message', msg);
	  });
	});

var headerPage = require('./HeaderPage.js');
var headerObjects = require('../object-repo/HeaderPageLocators.json');

var HeaderPageValidator = function() {
	
//Validate the added price
	this.validateLogo = function(callback) {
	    Q.all([
			 	expect(element(by.xpath(headerObjects.logo)).getText()).withMessage('Expected Header page is Opend').to.eventually.equal('Amazon')
			 ]).should.notify(callback); 
		
	};
	
//Validate order count
	this.validateOrderCount = function(order,callback) {
	    Q.all([
			 	expect(element(by.xpath(headerObjects.headerPage.header.orders)).getText()).withMessage('Expected Header page is Opend').to.eventually.equal(order)
			 ]).should.notify(callback); 
		
	};
	//Validate Error message
	this.validateErrorMessage = function(callback) {
	    Q.all([
			 	expect(element(by.xpath(headerObjects.headerPage.login.errorMessage)).getText()).withMessage('Expected Header page is Opend').to.eventually.equal("There was a problem")
			 ]).should.notify(callback); 
		
	};
	


};
module.exports = new HeaderPageValidator();