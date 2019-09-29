#!/bin/bash

echo "Running Medtronics tests:"

protractor cucumber_conf.js

#Generate results

node ./support/resultsGenerator.js


