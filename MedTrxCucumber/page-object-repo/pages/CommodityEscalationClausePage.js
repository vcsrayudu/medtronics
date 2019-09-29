/**
 * Page method to access the page objects Created by I340190
 */

var commodityClauseObjects = require('../object-repo/CommodityEscalationClause.json');

var CommodityEscalationClausePage = function() {
// Create Commodity Escalation clause
	this.createEscalationClause = function(commodity, frequency, exchangeRate, market,internalComment, calculationDescription, currency, tolerance, uom) {
		element(by.xpath(commodityClauseObjects.commodityclause.commodity)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.commodity)).sendKeys(commodity);
		element(by.xpath("//a[contains(@title,'"+commodity+"')]")).click();
		element(by.xpath(commodityClauseObjects.commodityclause.exchangeRate)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.exchangeRate)).sendKeys(exchangeRate);
		element(by.xpath(commodityClauseObjects.commodityclause.market)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.market)).sendKeys(market);
		element(by.xpath(commodityClauseObjects.commodityclause.internalComment)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.internalComment)).sendKeys(internalComment);
		element(by.xpath(commodityClauseObjects.commodityclause.calculationDescription)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.calculationDescription)).sendKeys(calculationDescription);
		element(by.xpath(commodityClauseObjects.commodityclause.tolerance)).sendKeys(tolerance);
		element(by.xpath(commodityClauseObjects.commodityclause.currency)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.currency)).sendKeys(currency);
		element(by.xpath("//a[contains(@title,'"+currency+"')]")).click();
		element(by.xpath(commodityClauseObjects.commodityclause.uom)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.uom)).sendKeys(uom);
		element(by.xpath("//a[contains(@title,'"+uom+"')]")).click();
		element(by.xpath(commodityClauseObjects.commodityclause.frequencyDropdown)).click();
		return element(by.linkText(frequency)).click();
		
	};
	
//Add a price to the commodity clause
	this.addPrice = function(price,validFrom,validTo,commodity) {
//		this.searchCommodityClause(commodity);
//		element(by.xpath(commodityClauseObjects.commodityclause.actionsDropdown)).click();
//		element(by.xpath(commodityClauseObjects.commodityclause.addPrice)).click();
		this.clickOnActions("addPrice",commodity);
		element(by.xpath(commodityClauseObjects.commodityclause.priceValue)).sendKeys(price);
		element(by.xpath(commodityClauseObjects.commodityclause.validFrom)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.validFrom)).sendKeys(validFrom);
		element(by.xpath(commodityClauseObjects.commodityclause.validTo)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.validTo)).sendKeys(validTo);
		element(by.xpath(commodityClauseObjects.commodityclause.save)).click();
		return(browser.sleep(2000));
	
	};
	
	
	//Edit a price to the commodity clause
	this.editPrice = function(price,validFrom,validTo,commodity) {
		//need to add condition to select the proper entry
			element(by.xpath(commodityClauseObjects.commodityclause.actionsDropdown)).click();
		
		element(by.xpath(commodityClauseObjects.commodityclause.actions["edit"])).click();
		element(by.xpath(commodityClauseObjects.commodityclause.priceValue)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.priceValue)).sendKeys(price);
		element(by.xpath(commodityClauseObjects.commodityclause.validFrom)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.validFrom)).sendKeys(validFrom);
		element(by.xpath(commodityClauseObjects.commodityclause.validTo)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.validTo)).sendKeys(validTo);
		element(by.xpath(commodityClauseObjects.commodityclause.update)).click();
		return(browser.sleep(2000));
	
	};
	
	
	
//Search for the commodity clause
	this.searchCommodityClause = function(commodity) {
		element(by.xpath(commodityClauseObjects.commodityclause.commodityTermSearch)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.commodityTermSearch)).sendKeys(commodity);
		element(by.xpath("//a[contains(@title,'"+commodity+"')]")).click();
		element(by.xpath(commodityClauseObjects.commodityclause.activeRadio)).click();
		return element(by.xpath(commodityClauseObjects.commodityclause.search)).click();
	
	};
	
//Search for the commodity clause based on status
	this.searchCommodityClauseState = function(commodity, activeStatus) {
		element(by.xpath(commodityClauseObjects.commodityclause.commodityTermSearch)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.commodityTermSearch)).sendKeys(commodity);
		element(by.xpath("//a[contains(@title,'"+commodity+"')]")).click();
		element(by.xpath("//input[@value='"+activeStatus+"']")).click();
		return element(by.xpath(commodityClauseObjects.commodityclause.search)).click();
	
	};
	
	//Search for the commodity and click on the action
	this.clickOnActions = function(action, commodity) {
		this.searchCommodityClause(commodity);
		
		element(by.xpath(commodityClauseObjects.commodityclause.actionsDropdown)).click();
	
		return 	element(by.xpath(commodityClauseObjects.commodityclause.actions[action])).click();
	
		
	};
//View price for the commodity
	this.veiwPrice = function(commodity) {
//		this.searchCommodityClause(commodity);
		
//		element(by.xpath(commodityClauseObjects.commodityclause.actionsDropdown)).click();
//	    return	 element(by.xpath(commodityClauseObjects.commodityclause.viewPrice)).click();
	return this.clickOnActions("viewPrice",commodity);
		
	};
	
//Edit the commodity escalation clause
	this.editCommodityEscalationClause = function(commodity, frequency, exchangeRate, market, internalComment, calculationDescription, currency, uom) {
		this.clickOnActions("edit",commodity);
		element(by.xpath(commodityClauseObjects.commodityclause.exchangeRate)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.exchangeRate)).sendKeys(exchangeRate);
		element(by.xpath(commodityClauseObjects.commodityclause.market)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.market)).sendKeys(market);
		element(by.xpath(commodityClauseObjects.commodityclause.internalComment)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.internalComment)).sendKeys(internalComment);
		element(by.xpath(commodityClauseObjects.commodityclause.calculationDescription)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.calculationDescription)).sendKeys(calculationDescription);
		element(by.xpath(commodityClauseObjects.commodityclause.currency)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.currency)).sendKeys(currency);
		element(by.xpath("//a[contains(@title,'"+currency+"')]")).click();
		element(by.xpath(commodityClauseObjects.commodityclause.uom)).clear();
		element(by.xpath(commodityClauseObjects.commodityclause.uom)).sendKeys(uom);
		element(by.xpath("//a[contains(@title,'"+uom+"')]")).click();
		element(by.xpath(commodityClauseObjects.commodityclause.frequencyDropdown)).click();
	    element(by.linkText(frequency)).click();
		 return element(by.xpath(commodityClauseObjects.commodityclause.update)).click();
     
	};
	
//Deactivate the commodity escalation clause
	this.deactivateCommodityEscalationClause = function(commodity) {
//		this.searchCommodityClause(commodity);
//		element(by.xpath(commodityClauseObjects.commodityclause.actionsDropdown)).click();
	
	//	return element(by.xpath(commodityClauseObjects.commodityclause.deactivate)).click();
		return this.clickOnActions("deactivate",commodity);;
	};
	
//Activate the commodity escalation clause
	this.activateCommodityEscalationClause = function(commodity) {
		return this.clickOnActions("activate",commodity);;
	};	
	
	//Delete the commodity escalation clause
	this.deleteCommodityEscalationClause = function(commodity) {
		return this.clickOnActions("delete",commodity);
	};
	
	
	function actionPath(action){
		return "commodityClauseObjects.commodityclause.actions."+action;
	}
	
};



module.exports = new CommodityEscalationClausePage();