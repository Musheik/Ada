package com.pomclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotelPage {
	
	public WebDriver driver;

	// 1) hotel location ,, 2) name of hotels ..3) roomtype ,,4) number of room ,,5) adult per room ,,6) child per room ,,7) search
	
	@FindBy(xpath="//*[@id=\"location\"]")
	 public WebElement hotelLocation;
	@FindBy(xpath="//*[@id=\"hotels\"]")
	public WebElement hotelname;
	
	
	
	@FindBy(xpath="//*[@id=\"room_type\"]")
	public WebElement roomtype;
	
	
	@FindBy(xpath="//*[@id=\"room_nos\"]")
	public WebElement numberOfRooms;
	
	@FindBy(xpath="//*[@id=\"adult_room\"]")
	public WebElement adultPerRoom;
	
	
	@FindBy(xpath="//*[@id=\"child_room\"]")
	public WebElement childPerRoom;
	
	
	@FindBy(xpath="//*[@id=\"Submit\"]")
	public WebElement searchkey;
	
	
	public SearchHotelPage(WebDriver driver2) {
		this.driver=driver2;
		
		PageFactory.initElements(driver, this);
	}


	public WebElement getHotelLocation() {
		return hotelLocation;
	}


	public WebElement getHotelname() {
		return hotelname;
	}


	public WebElement getRoomtype() {
		return roomtype;
	}


	public WebElement getNumberOfRooms() {
		return numberOfRooms;
	}


	public WebElement getAdultPerRoom() {
		return adultPerRoom;
	}


	public WebElement getChildPerRoom() {
		return childPerRoom;
	}


	public WebElement getSearchkey() {
		return searchkey;
	}





}
