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

var cemPage = require('./CommodityEscalationClausePage.js');
var commodityClauseObjects = require('../object-repo/CommodityEscalationClause.json');

var CommodityEscalationClauseValidator = function() {
	
//Validate the added price
	this.validateAddedPrice = function(price,validFrom,validTo,commodity,callback) {
	    Q.all([
			 	expect(element(by.xpath("//td[text()='"+commodity+"']")).getText()).withMessage('Expected commodity value : '+commodity+' is not exist').to.eventually.equal(commodity),
			 	expect(element(by.xpath("//div[text()='"+price+"']")).isPresent()).withMessage('Expected price valuve : '+price +' is not exist').to.eventually.equal(true),
				expect(element(by.xpath("//div[text()='"+validFrom+"']")).isPresent()).withMessage('Expected validFrom value : '+validFrom +' is not exist').to.eventually.equal(true),
				expect(element(by.xpath("//div[text()='"+validTo+"']")).isPresent()).withMessage('Expected validTo value : '+validTo +' is not exist').to.eventually.equal(true)
			  ]).should.notify(callback); 
		
	};
// Validate the created escalation clause
	this.validateEscalationClause = function(commodity, frequency, exchangeRate, market,internalComment, calculationDescription, currency, tolerance, uom, callback) {
	    
		cemPage.searchCommodityClause(commodity);
		Q.all([	
			expect(element(by.xpath(commodityClauseObjects.commodityclause.search)).isPresent()).withMessage('Search Button is not exist').to.eventually.equal(true),
			expect(element(by.xpath("//div[text()='"+commodity+"']")).isPresent()).withMessage('Expected commodity value : '+commodity +' is not exist').to.eventually.equal(true),
			
			expect(element(by.xpath("//div[text()='"+exchangeRate+"']")).isPresent()).withMessage('Expected exchangeRate valuve : '+exchangeRate +' is not exist').to.eventually.equal(true),
			expect(element(by.xpath("//div[text()='"+market+"']")).isPresent()).withMessage('Expected market value : '+market +' is not exist').to.eventually.equal(true),
			expect(element(by.xpath("//div[text()='"+internalComment+"']")).isPresent()).withMessage('Expected internalComment value : '+internalComment +' is not exist').to.eventually.equal(true),
			expect(element(by.xpath("//div[text()='"+calculationDescription+"']")).isPresent()).withMessage('Expected calculationDescription value : '+calculationDescription +' is not exist').to.eventually.equal(true),
			expect(element(by.xpath("//div[text()='"+currency+"']")).isPresent()).withMessage('Expected currency value : '+currency +' is not exist').to.eventually.equal(true),
			expect(element(by.xpath("//div[text()='"+uom+"']")).isPresent()).withMessage('Expected uom value : '+uom +' is not exist').to.eventually.equal(true), 
			expect(element(by.xpath("//div[text()='"+frequency+"']")).isPresent()).withMessage('Expected frequency value : '+frequency +' is not exist').to.eventually.equal(true)
			]).should.notify(callback); 
		return this;
	};
//Validate the deactivated Clause
	this.validateDeactivatedClause = function(commodity,callback) {
		cemPage.searchCommodityClauseState(commodity,"No");
    	 Q.all([
 			//Need to add steps
	
			 expect(element(by.xpath("//div[text()='"+commodity+"']")).isPresent()).withMessage('Expected commodity value : '+commodity +' is not DeActivated').to.eventually.equal(true)
				
			 ]).should.notify(callback); 
	
	
	return this;
};


//Validate the Activated Clause
this.validateActivatedClause = function(commodity,callback) {
	cemPage.searchCommodityClauseState(commodity,"Yes");
	 Q.all([
			//Need to add steps
		 expect(element(by.xpath("//div[text()='"+commodity+"']")).isPresent()).withMessage('Expected commodity value : '+commodity +' is not Activated').to.eventually.equal(true)
			 ]).should.notify(callback); 


return this;
};

//Validate the deleted Clause
this.validateDeletedClause = function(commodity,callback) {
	cemPage.searchCommodityClause(commodity);
	 Q.all([
			
		 expect(element(by.xpath("//div[text()='"+commodity+"']")).isPresent()).withMessage('Expected commodity value : '+commodity +' is not Deleted').to.eventually.equal(false)
			 	
		 ]).should.notify(callback); 


return this;
};

};
module.exports = new CommodityEscalationClauseValidator();