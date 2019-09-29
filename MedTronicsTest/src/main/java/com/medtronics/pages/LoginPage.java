package com.medtronics.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {
    private WebDriver driver;

    @FindBy(xpath = "//h1[@value='\n" +
            "            Sign-In\n" +
            "          '")
    WebElement heading;
    @FindBy(id=" auth-fpp-link-bottom")
    WebElement forgetPassword;

    private WebDriverWait wait;

    public WebElement getLoginName() {
        return loginName;
    }

    @FindBy(id="ap_email")
    WebElement loginName;

    @FindBy(id = "ap_password")
    WebElement password;

    @FindBy(id = "continue")
    WebElement continueButton;
    @FindBy(id = "signInSubmit")
    WebElement signInSubmit;

    @FindBy(id = "createAccountSubmit")
    WebElement createAccountSubmit;

    @FindBy(xpath = "//span[@value='Email (phone for mobile accounts)']")
    WebElement loginLable;
    @FindBy(xpath = "//div[@id='auth-error-message-box']/div/h4")
    WebElement errorMessage;


    private static final int TIMEOUT = 5;
    private static final int POLLING = 100;



    //Constructor
    public LoginPage(WebDriver driver){
        this.driver=driver;


        wait = new WebDriverWait(driver, TIMEOUT, POLLING);
        PageFactory.initElements(new AjaxElementLocatorFactory(driver, TIMEOUT), this);
    }


    public void setLoginName(String loginName){
        this.loginName.clear();
        this.loginName.sendKeys(loginName);
    }

    public void setPassword(String pwd){
       password.clear();
        password.sendKeys(pwd);
    }


    public void clickOnSubmit(){
        signInSubmit.click();
    }
    public void clickOnContinue(){
        continueButton.click();
    }
    public void clickOnCreateAccountSubmit(){
        createAccountSubmit.click();
    }
    public boolean isPageOpened(){
        //Assertion
        return heading.getText().toString().contains("Sign-in");
    }
    protected void waitForElementToAppear(By locator) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    public boolean expectedInvalidUser(){
        //Assertion
        return errorMessage.getText().toString().contains("There was a problem");
    }



}
