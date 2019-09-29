package com.medtronics.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

public class HeaderPage {
    private WebDriver driver;


    @FindBy(id="twotabsearchtextbox")
    WebElement searchbox;

    @FindBy(xpath="//input[@value='Go']")
    WebElement searchButton;
    @FindBy(id="searchDropdownBox")
    WebElement searchDropdown;
    @FindBy(id="nav-logo")
    WebElement logo;
    @FindBy(id="nav-cart-count")
    WebElement cartCount;
    @FindBy(id="nav-orders")
    WebElement orders;
    @FindBy(id="nav-link-accountList")
    WebElement accountList;
    @FindBy(id="nav-item-signout")
    WebElement signOut;


   /* @FindBy(xpath="//span[text()='Hello, Sign in']")
    WebElement signin;*/
    @FindBy(xpath="//div[@id='nav-flyout-ya-signin']/a")
    WebElement signin;

    public void clickSignin()
    {
        this.signin.click();
    }
    public void clickOnLogout()
    {
        Actions action=new Actions(driver);
        action.clickAndHold(this.accountList).perform();
        this.accountList.click();
        this.signOut.click();
    }

    public void setSearchbox(String search) {
        this.searchbox.clear();
        this.searchbox.sendKeys(search);
    }

    public void clickSearchButton() {
        this.searchButton.click();
    }

    public void setSearchDropdown(String searchinDropdown) {
        Select select=new Select(this.searchDropdown);
    }

    public void setLogo() {

    }

    public int getCartCount() {
      return  Integer.parseInt(this.cartCount.getText());
    }

    public void setOrders(WebElement orders) {
        this.orders = orders;
    }

    public void clickAccountList() {
        Actions action=new Actions(driver);
        action.clickAndHold(this.accountList).perform();
        this.accountList.click();

    }



//Constructor

    public HeaderPage(WebDriver driver){
        this.driver=driver;
        Reporter.log("HeaderPage initialization");
        PageFactory.initElements(driver, this);
    }


}