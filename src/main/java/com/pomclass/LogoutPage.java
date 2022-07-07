package com.pomclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LogoutPage {
	public WebDriver driver;
	
	@FindBy(xpath ="//*[@id=\"logout\"]")
	public WebElement signout;
	
	public LogoutPage(WebDriver driver2) {
		this.driver=driver2;
		
		PageFactory.initElements(driver, this);

}
	
	public WebElement getSignout() {
		return signout;
	}

}
