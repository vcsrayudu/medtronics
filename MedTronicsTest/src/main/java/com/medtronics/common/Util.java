package com.medtronics.common;

import com.medtronics.pages.HeaderPage;
import com.medtronics.pages.LoginPage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Reporter;
import org.testng.annotations.Parameters;

public class Util {

    public static void logout(WebDriver driver ,HeaderPage headerPage)
    {

        headerPage.clickOnLogout();

    }
    public static void navigateToLogin(WebDriver driver, String url, HeaderPage headerPage)
    {
        driver.get(url);
        Reporter.log("URL is opend");
        headerPage.clickAccountList();
        headerPage.clickSignin();
        Reporter.log("Login page opend");
    }
    public static void search(HeaderPage headerPage, String itemName)
    {
        headerPage.setSearchbox(itemName);
        headerPage.clickSearchButton();
    }
    public static void login(LoginPage loginPage, String user, String password)
    {
        Reporter.log("User is entered");
        loginPage.setLoginName(user);
        loginPage.clickOnContinue();
        Reporter.log("Click on Continue Button");
        loginPage.setPassword(password);
        loginPage.clickOnSubmit();
        Reporter.log("Login successfully");
    }
}
