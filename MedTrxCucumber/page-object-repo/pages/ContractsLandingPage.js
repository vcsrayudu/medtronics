/**
 *  Page method to access the page objects
 *  Created by I340190
 */

var Objects = require('../object-repo/ContractsLandingPage.json');
//var custom =  require('../custom-locators/custom-locators.js');
var vars = require('../../config/app-vars.js');
var ContractsLandingPage = function (){


	// This method will login in to s4 app and
    this.logintos4 = function (keyword){
        console.log('Clicking on Test Central button');
        element(by.xpath("//a[contains(text(),'Test Central')]")).click();
        element(by.id("_bt5lrc")).sendKeys(keyword);
        element(by.id("_njzfkc")).click();
        browser.sleep(4000);
        return this;
    };

    // This method will click on product sourcing
    this.goToAdminTemplate = function (){
        console.log('Clicking on Admin Template button');
        element(by.id("_7zkxsb")).click();
      
        browser.sleep(4000);
      
        return this;
      
    };

    // This method will click on product sourcing
    
    this.goToProductSourcing = function (){
        console.log('Clicking on dashboard button ');
        element(by.id("//a[@title='dashboard']")).click();
        console.log('Clicking on Dashboard Main Without Wait');
        element(by.xpath("//a[contains(text(),'Dashboard Main Without Wait')]")).click();
        browser.sleep(2000);
        return this;
      
    };
    //This method will login to Admin Page
    
    this.login2Admin = function(){
    	browser.waitForAngularEnabled(false); 
    	//browser.ignoreSynchronisation = true;
    	// browser.executeScript('window.sessionStorage.clear();');
    	//browser.executeScript('window.localStorage.clear();');
        browser.get(vars.contracts_url);
    	//browser.get("/");
        browser.manage(	).window().setSize(1600, 1000);		
        browser.sleep(2000);
        this.logintos4("adavis");
	    this.goToAdminTemplate();
	   
	   
	    return this;
    };
//This method will go to Commodity Escalation Manager
    
    this.go2CommodityEM = function(){
    	
    	this.login2Admin();
    	 browser.sleep(2000);
    	console.log('Click on Commodity Escalation Manager');
    	
    	element(by.xpath(Objects.landingpage.commodityem.cem)).click();
   
    	 browser.sleep(4000);
	    console.log('Click on Commodity clause configuration');
    	element(by.xpath(Objects.landingpage.commodityem.clause_config)).click();
    
    	browser.sleep(10000);
      
    	return browser.waitForAngularEnabled(true); 
	   // return this;
    };
    
    

};

module.exports = new ContractsLandingPage();
