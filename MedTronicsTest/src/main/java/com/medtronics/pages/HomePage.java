package com.medtronics.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage {

    private WebDriver driver;


    @FindBy(xpath = "//h2[text()='Hi, v']")
    WebElement successfulLoggedin;
    ;
    private static final int TIMEOUT = 5;
    private static final int POLLING = 100;

    private WebDriverWait wait;

    //Constructor
    public HomePage(WebDriver driver){
        this.driver=driver;


        wait = new WebDriverWait(driver, TIMEOUT, POLLING);
        PageFactory.initElements(new AjaxElementLocatorFactory(driver, TIMEOUT), this);
    }
    protected void waitForElementToAppear(By locator) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    public boolean successfulLoginPage(){
        //Assertion
        return successfulLoggedin.getText().toString().contains("Hi, v");
    }

}
