package com.pomclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookAHotel {
	
	public WebDriver driver;

	//1)first name ,, 2) lastname ,, 3) adress ,,4) creditcardnumber ,,5) 
	
	@FindBy(xpath="//*[@id=\"first_name\"]")
	public WebElement fstName;
	
	@FindBy(xpath="//*[@id=\"last_name\"]")
	public WebElement lstName;
	
	@FindBy(xpath="//*[@id=\"address\"]")
	public WebElement address;
	
	@FindBy(xpath="//*[@id=\"cc_num\"]")
	
	public WebElement creditCardnumber;
	
	
	@FindBy(xpath="//*[@id=\"cc_type\"]")
	
	public WebElement CCtype;
	
	
	@FindBy(xpath="//*[@id=\"cc_exp_month\"]")
	
	public WebElement month;
	
	@FindBy(xpath="//*[@id=\"cc_exp_year\"]")
	public WebElement year;
	
	@FindBy(xpath="//*[@id=\"cc_cvv\"]")
	public WebElement cvv;
	
	@FindBy(xpath="//*[@id=\"book_now\"]")
	public WebElement booknow;
	
	
	@FindBy(xpath="//*[@id=\"my_itinerary\"]")
	public WebElement itinearybutton;
	
//	@FindBy(xpath ="//*[@id=\"logout\"]")
//	public WebElement signout;
//	
//	public WebElement getSignout() {
//		return signout;
//	}

	public WebElement getItinearybutton() {
		return itinearybutton;
	}

	public BookAHotel(WebDriver driver2) {
		this.driver=driver2;
		
		PageFactory.initElements(driver, this);
	}

	public WebElement getFstName() {
		return fstName;
	}

	public WebElement getLstName() {
		return lstName;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getCreditCardnumber() {
		return creditCardnumber;
	}

	public WebElement getCCtype() {
		return CCtype;
	}

	public WebElement getMonth() {
		return month;
	}

	public WebElement getYear() {
		return year;
	}

	public WebElement getCvv() {
		return cvv;
	}

	public WebElement getBooknow() {
		return booknow;
	}

	
}
