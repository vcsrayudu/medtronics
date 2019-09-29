/**
 *  Page method to access the page objects
 *  Created by I340190
 */

var headerObjects = require('../object-repo/HeaderPageLocators.json');
var vars = require('../../config/app-vars.js');
var HeaderPage = function (){

// This method will navigate to Login page
    
    this.login = function (userName, password){
        console.log('Enter User name ');
        element(by.id(headerObjects.headerPage.login.loginName)).sendKeys(userName);
        console.log('Clicking on Continue');
        element(by.xpath(headerObjects.headerPage.login.continueButton)).click();
        console.log('Enter User Password ');
        element(by.id(headerObjects.headerPage.login.password)).sendKeys(password);
        console.log('Click on Submit ');
        return element(by.id(headerObjects.headerPage.login.signInSubmit)).click();
      
    };
    
    
    
    // This method will navigate to Login page
    
    this.nagigateTologin = function (){
        console.log('Clicking on Login Button ');
       // element(by.id(headerObjects.headerPage.header.accountList)).click();
        console.log('Clicking on Signin');
         element(by.id(headerObjects.headerPage.header.accountList)).click();
        return browser.sleep(500);
      
    };
    //This method will Just launch the browser
    
    this.landingPage = function(){
    	browser.waitForAngularEnabled(false); 
    	//browser.ignoreSynchronisation = true;
    	// browser.executeScript('window.sessionStorage.clear();');
    	//browser.executeScript('window.localStorage.clear();');
        browser.get(vars.app_url);
    	//browser.manage().window().setSize(1600, 1000);
        browser.driver.manage().window().maximize();
    	return browser.sleep(500);
       // browser.sleep(2000);
       
    };


};

module.exports = new HeaderPage();
