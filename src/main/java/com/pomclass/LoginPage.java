package com.pomclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

	public WebDriver driver ;  //null (initially before linking the value of driver is null so its through null point exxception..)
	
	
	// getters with private var for uName,Pword and login
	@FindBy(xpath = "//input[@id='username']")
	private WebElement uName;

	@FindBy(xpath = "//input[@id='password']")

	private WebElement pWord;

	@FindBy(xpath = "//input[@id='login']")

	private WebElement loginBTN;
	
	
	public LoginPage(WebDriver driver2) {
		this.driver = driver2;
		
		PageFactory.initElements(driver, this);
		
		
	}

	// methods for uname,pword and login
	public WebElement getuName() {
		return uName; 
	}

	public WebElement getpWord() {
		return pWord;
	}

	public WebElement getLoginBTN() {
		return loginBTN;
	}



}
