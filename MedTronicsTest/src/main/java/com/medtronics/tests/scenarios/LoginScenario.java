package com.medtronics.tests.scenarios;

import com.medtronics.common.SetWebDriver;
import com.medtronics.common.Util;
import com.medtronics.pages.HeaderPage;
import com.medtronics.pages.HomePage;
import com.medtronics.pages.LoginPage;
import com.medtronics.tests.data.LoginDataProvider;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.*;

public class LoginScenario {
    private WebDriver driver;
    private LoginPage loginPage;
    private HeaderPage headerPage;
    @BeforeClass(groups = {"acceptance","acceptance"})
    @Parameters({ "browser" })
    public void beforeSuite(String browser) {
     driver= SetWebDriver.getWebdriver(browser);
        headerPage=new HeaderPage(driver);
        loginPage= new LoginPage(driver);
    }
    @BeforeMethod(groups = {"regression","acceptance"})
    @Parameters({ "url" })
    public void setUp(String url)
    {
        Util.navigateToLogin(driver,url,headerPage);
    }

    @Test(dataProvider="loginDataProvider",dataProviderClass= LoginDataProvider.class,groups = {"regression"})
    public void LoginWithInValidUsers(String invalidUser, String password)
    {
        loginPage.setLoginName(invalidUser);
        loginPage.clickOnContinue();
        Assert.assertTrue(loginPage.expectedInvalidUser());

    }

    @Test(dataProvider="loginDataProvider",dataProviderClass= LoginDataProvider.class,groups = {"regression", "acceptance"})

    public void LoginWithValidUsers(String user, String password)
    {
        Util.login(loginPage,user,password);
        HomePage homePage=new HomePage(driver);
        Assert.assertTrue(homePage.successfulLoginPage());
    }
    @Test(dataProvider="loginDataProvider",dataProviderClass= LoginDataProvider.class,groups = {"regression"})
    public void LoginWithValidUserInvalidPassword(String user, String invalidPassword)
    {
        loginPage.setLoginName(user);
        loginPage.clickOnContinue();
        loginPage.setPassword(invalidPassword);
        loginPage.clickOnSubmit();
        Assert.assertTrue(loginPage.expectedInvalidUser());

    }
    @AfterMethod(groups = {"acceptance","acceptance"})
    public void tearDown()
    {
        Util.logout(driver,headerPage);
    }

    @AfterClass(groups = {"acceptance","acceptance"})
    public void closeDriver()
    {
        driver.close();
    }


}
