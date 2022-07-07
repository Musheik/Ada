package com.pomclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectHotelRadioBtn {
	
 public	WebDriver driver;
	
	//select radio
	@FindBy(xpath="//*[@id=\"radiobutton_0\"]")
	public WebElement radio;
	
	@FindBy(xpath="//*[@id=\"continue\"]")
	
	public WebElement continuebtn;

	public WebDriver getDriver() {
		return driver;
	}

	public WebElement getContinuebtn() {
		return continuebtn;
	}

	public SelectHotelRadioBtn(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver, this);
	}

	public WebElement getRadio() {
		return radio;
	}
	
	
	
	

}
