echo "Start webdriver manager &"

#START /B webdriver-manager start 
echo "Running Medtronics tests:"

protractor cucumber_conf.js

#Generate results

echo "Generate results:"

node ./support/resultsGenerator.js

