var JsonFormatter = require('cucumber').JsonFormatter;
var fs = require('fs');
var reporter = require('cucumber-html-reporter');
var CucumberHtmlReport = require('cucumber-html-reporter');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var conf = require("../cucumber_conf").config;

var outputDir = './test-results/'+conf.regressionNumber+'/';
	
'use strict';

defineSupportCode(function({Before,After,registerListener}) {
	/*Before(function (scenario,callback) {
		browser.waitForAngularEnabled(false); 
        browser.get("http://inll11340190l:8150/Sourcing/Main/aw?awh=r&awssk=3EHD1ObA&realm=s4All&dard=1");
       
         callback();
    }); */

	After(function (scenario,callback) {
		let self = this;
		
        if (scenario.isFailed()) {
            browser.takeScreenshot().then(function (base64png) {
            	 self.attach(new Buffer(base64png, 'base64'), 'image/png');
                callback();
              
            }, function (err) {
            	
                return callback(err);
            });
        } else{
        callback();
        }
        
        
       browser.restart();
       callback();
    });



	var createHtmlReport = function (sourceJson) {

	    var options = {
	        theme: 'bootstrap',
	        jsonFile: sourceJson, //please double check, this should be a path to your JSON File
	        output: outputDir+'index.html', //please double check, this should have a file name at the end
	        reportSuiteAsScenarios: true,
	        name: 'Commodity Escalation Clause',
	        brandTitle: 'Contracts Regression Results Report',  
	        launchReport: true
	    };

	    CucumberHtmlReport.generate(options);
	};
    
  
});