package com.Adcitin_And_Cucumber;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.pageObjectManger.PageObjectManager;
import com.pomclass.BookAHotel;
import com.pomclass.LoginPage;
import com.pomclass.SearchHotelPage;
import com.pomclass.SelectHotelRadioBtn;
import com.properties.File_Read_Manager;

public class Runnerclass extends BaseClass {

	public static WebDriver driver = browserLaunch("chrome");

	public static PageObjectManager pom = new PageObjectManager(driver);

	public static void main(String[] args) throws InterruptedException, IOException {

		// 1) launch browser

		// 2) get link

		// calling Static Frm for url

		String url = File_Read_Manager.getInstantFRM().getInstanceCR().getUrl();

		getUrl(url);

		// 3) pass input

		Thread.sleep(5000);

		// username

		// call loginpge methods without using extends

		// for username

		String username = File_Read_Manager.getInstantFRM().getInstanceCR().getUsername();
		passInput(pom.getInstanceLogin().getuName(), username);

		// password

// calling FRM for password

		String password = File_Read_Manager.getInstantFRM().getInstanceCR().getpassword();
		passInput(pom.getInstanceLogin().getpWord(), password);

		// login

		clickOnElement(pom.getInstanceLogin().getLoginBTN());

		// Dropdown

		// 1) hotel locations
		hotelBooking(pom.getInstantSearchHotel().getHotelLocation(), "London");

		// 2) Select hotels
		hotelBooking(pom.getInstantSearchHotel().getHotelname(), "Hotel Creek");

		// 3)room type

		hotelBooking(pom.getInstantSearchHotel().getRoomtype(), "Super Delux");

		// 4 )) no of room

		hotelBooking(pom.getInstantSearchHotel().getNumberOfRooms(), "10");
		// 5) adult per room

		hotelBooking(pom.getInstantSearchHotel().getAdultPerRoom(), "3");
		// 6) child per room

		hotelBooking(pom.getInstantSearchHotel().getChildPerRoom(), "2");

		// 7) Search
		clickOnElement(pom.getInstantSearchHotel().searchkey);

		// radio Page

		// 8) radio

		radiobutton(pom.getInstanceRdobtn().getRadio());

		// 9) contiue button click

		clickOnElement(pom.getInstanceRdobtn().getContinuebtn());

		// bookhotel

		// 10)) first name
		String firstName = File_Read_Manager.getInstantFRM().getInstanceCR().getFirstName();

		passInput(pom.getIntanceBook().getFstName(), firstName);

		// 11) last name

		String lastName = File_Read_Manager.getInstantFRM().getInstanceCR().getLastName();

		passInput(pom.getIntanceBook().getLstName(), lastName);

		// 12)) address

		String address = File_Read_Manager.getInstantFRM().getInstanceCR().getAddress();

		passInput(pom.getIntanceBook().getAddress(), address);

		// 13)) Credit card number
		String cardNumber = File_Read_Manager.getInstantFRM().getInstanceCR().getCardNumber();
		passInput(pom.getIntanceBook().getCreditCardnumber(), cardNumber);

		// 14) CC type

		hotelBooking(pom.getIntanceBook().getCCtype(), "VISA");

		// 15) // expire month
		hotelBooking(pom.getIntanceBook().getMonth(), "May");

		// 16)) expire year

		hotelBooking(pom.getIntanceBook().getYear(), "2022");

		// 17 ) cvv number

		passInput(pom.getIntanceBook().getCvv(), "365");

		// 18) book now

		clickOnElement(pom.getIntanceBook().getBooknow());

		Thread.sleep(5000);

		// 20) logout

		clickOnElement(pom.getIntanceLogout().getSignout());

		// 21) screenshots

		screenShot("F:\\musheik2\\Sneha Projects\\Maven\\MavenProject-SnehaMam\\Screenshots\\adacitn.png");

	}
}
