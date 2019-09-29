package com.medtronics.common;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.testng.Reporter;

import java.util.concurrent.TimeUnit;

public class SetWebDriver {

	public static WebDriver getWebdriver(String s)
	{
		WebDriver webdriver = null;
		if(s.equals("firefox"))
		{
			webdriver = new FirefoxDriver();
			Reporter.log("Creating Firefox driver");
		}
		else if(s.equals("ie"))
		{
			System.setProperty("webdriver.ie.driver", "win\\browserexe\\IEDriverServer.exe");
			//System.setProperty("webdriver.ie.driver.host","localhost");
			webdriver = new InternetExplorerDriver();
		}
		else if(s.equals("chrome"))
		{
			System.setProperty("webdriver.chrome.driver", "win\\browserexe\\chromedriver.exe");
			webdriver = new  ChromeDriver();
			Reporter.log("Creating Chrome driver\n");
		}
		else if(s.equals("safari"))
		{
			System.setProperty("webdriver.safari.driver", "win\\browserexe\\safaridriver.exe");
			webdriver = new SafariDriver();
		}
		webdriver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		return webdriver;
	}
	
}
