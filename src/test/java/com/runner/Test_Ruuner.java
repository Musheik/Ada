package com.runner;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.Adcitin_And_Cucumber.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\feature", glue = "com.stepdefination" ,tags = ("@Login , ~@Logout"), monochrome = true , dryRun = false,strict = false,
plugin = {"html:Report" , "json:Report/cucu.json" , "pretty", "com.cucumber.listener.ExtentCucumberFormatter:Report/Ada.html "} )
public class Test_Ruuner {
	public static WebDriver driver;
	
	@BeforeClass
	public static void setUP() {
		
		driver=BaseClass.browserLaunch("chrome");
		
	}
	
	@AfterClass
	public static void tearDown() {
		
		driver.close();
		
		// or
		//BaseClass.closeBrowser();
		
	}

}
