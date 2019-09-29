package com.medtronics.tests.scenarios;
import com.medtronics.common.SetWebDriver;
import com.medtronics.common.Util;
import com.medtronics.pages.HeaderPage;
import com.medtronics.pages.HomePage;
import com.medtronics.pages.LoginPage;
import com.medtronics.tests.data.LoginDataProvider;
import com.medtronics.tests.data.OrderDataProvider;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.*;

public class OrderScenario {
    private WebDriver driver;
    private LoginPage loginPage;
    private HeaderPage headerPage;
    @BeforeClass(groups = {"regression", "acceptance"})
    @Parameters({ "browser" ,"url" ,"user", "password"})
    public void beforeClass(String browser,String url, String user, String password) {
        driver= SetWebDriver.getWebdriver(browser);
        headerPage=new HeaderPage(driver);
        loginPage= new LoginPage(driver);
        Util.navigateToLogin(driver,url,headerPage);
        Util.login(loginPage,user,password);
    }
    @BeforeMethod(groups = {"regression", "acceptance"})
   public void setUp()
    {


    }

    @Test(dataProvider="orderDataProvider",dataProviderClass= OrderDataProvider.class,groups = {"regression", "acceptance"})
     public void placeOrder(String itemName, int numberOfItems)
    {
        Util.search(headerPage,itemName);

    }


    @AfterMethod(groups = {"regression", "acceptance"})
    public void teardown()
    {
        Util.search(headerPage,"");
    }
    @AfterClass(groups = {"regression", "acceptance"})
    public void afterClass()
    {
        driver.close();
    }

}
