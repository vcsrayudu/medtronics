var reporter = require('cucumber-html-reporter');
var conf = require("../cucumber_conf").config;

var outputDir = './test-results/'+conf.regressionNumber+'/';
var options = {
        theme: 'bootstrap',
        jsonFile: 'test-results/results.json',
        output: outputDir+'index.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);