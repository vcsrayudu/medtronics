
var app_var = require('./config/app-vars.js');

var today = new Date(),
timeStamp = today.getMonth() + 1 +''+today.getDate() + '' + today.getFullYear() + '_' + today.getHours() + 'h' + today.getMinutes() + 'm';
 //timeStamp=process.env.BUILD_NUMBER;
exports.config = {
		regressionNumber:timeStamp,
		allScriptsTimeout:30000,
	
		capabilities: {
			    browserName: app_var.browser,
			    recreateChromeDriverSessions: true
			  },
	     seleniumAddress: 'http://10.173.72.35:4444/wd/hub', 	 
		 ignoreUncaughtExceptions: true,
		 framework: 'custom',
			  // path relative to the current config file
		 frameworkPath: require.resolve('protractor-cucumber-framework'),
		 directConnect:false,
	
		 specs: [
			 'features/*.feature'
		
		 ],
	
		
		cucumberOpts: {
			require: [
					'step_definitions/CommodityEscalationClauseSteps.js',
					'support/support.js'
					],
	    	 tags: false,
	    	 format: 'pretty',
	    	 
	    	 profile: false,
	    	'no-source': true
	    	
	   
		}
     		
}
