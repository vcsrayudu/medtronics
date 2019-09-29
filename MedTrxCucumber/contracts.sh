#!/bin/bash

echo "Running Contracts tests:"

protractor cucumber_conf.js

#mvn site -Dallure.results_pattern=allure-results

#cd allure-results


