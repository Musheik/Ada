package com.stepdefination;

import java.io.IOException;

import com.Adcitin_And_Cucumber.BaseClass;
import com.pageObjectManger.PageObjectManager;
import com.properties.File_Read_Manager;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinination extends BaseClass{
	 public static PageObjectManager pom = new PageObjectManager(driver);
	 
	 @Before
	 public void beforeHooks(Scenario s) {
		 String Nmae = s.getName();
		 System.out.println("Scenario Name :"+ Nmae);
		

	}
	
	 @After
	 public void afterHooks(Scenario s) throws IOException {
		 String statusOfScenario = s.getStatus();
		 System.out.println("statusOfScenario :"+ statusOfScenario);
		 
		 if (s.isFailed()) {
			 screenShot("F:\\musheik2\\Sneha Projects\\Maven\\Adcitin_And_Cucumber\\Screenshots\\failed.png");
			
		}
		 
	 }
	@Given("^user Must Launch The Url Of Adacitin$")
	public void user_Must_Launch_The_Url_Of_Adacitin() throws Throwable {
		
		String url = File_Read_Manager.getInstantFRM().getInstanceCR().getUrl();

		getUrl(url);
	   
	}

	
	
	@When("^user Entering The \"([^\"]*)\" In The Username Field$")
	public void user_Entering_The_In_The_Username_Field(String username) throws Throwable {
		passInput(pom.getInstanceLogin().getuName(), username);
	}

	@When("^user Entering The \"([^\"]*)\" In The Password Field$")
	public void user_Entering_The_In_The_Password_Field(String password) throws Throwable {
		passInput(pom.getInstanceLogin().getpWord(),password);
	  
	}

	

	@Then("^user Click The Login Button And It Navigates To The Search Hotel Page$")
	public void user_Click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page() throws Throwable {
	    
		clickOnElement(pom.getInstanceLogin().getLoginBTN());
		
	}
	
	@When("^user Selecting The \"([^\"]*)\" From HotelLocation DropDown$")
	public void user_Selecting_The_From_HotelLocation_DropDown(String HotelLocation) throws Throwable {
		hotelBooking(pom.getInstantSearchHotel().getHotelLocation(), HotelLocation);
		   
	  
	}

	@When("^user Selecting The \"([^\"]*)\" From HotelSelection DropDown$")
	public void user_Selecting_The_From_HotelSelection_DropDown(String HotelSelection) throws Throwable {
		hotelBooking(pom.getInstantSearchHotel().getHotelname(), HotelSelection);
	   
	}

	@When("^user Selecting The \"([^\"]*)\" From RoomType DropDown$")
	public void user_Selecting_The_From_RoomType_DropDown(String RoomType) throws Throwable {
		hotelBooking(pom.getInstantSearchHotel().getRoomtype(), RoomType);
	   
	}

	@When("^user Selecting The \"([^\"]*)\" From Numbers Of Room  DropDown$")
	public void user_Selecting_The_From_Numbers_Of_Room_DropDown(String Numbers) throws Throwable {
		
		hotelBooking(pom.getInstantSearchHotel().getNumberOfRooms(), Numbers);
	  
	}

	@When("^user Selecting The \"([^\"]*)\" From Adult Per Room DropDown$")
	public void user_Selecting_The_From_Adult_Per_Room_DropDown(String Adult) throws Throwable {
		hotelBooking(pom.getInstantSearchHotel().getAdultPerRoom(), Adult);
	   
	}

	@When("^user Selecting The \"([^\"]*)\" From Child Per Room DropDown$")
	public void user_Selecting_The_From_Child_Per_Room_DropDown(String Child) throws Throwable {
		hotelBooking(pom.getInstantSearchHotel().getChildPerRoom(), Child);
	
	}

	@Then("^user Click The search Button And It Navigates To The Select Hotel Page$")
	public void user_Click_The_search_Button_And_It_Navigates_To_The_Select_Hotel_Page() throws Throwable {
		clickOnElement(pom.getInstantSearchHotel().searchkey);
	}

	@When("^user Selecting The Radio Button$")
	public void user_Selecting_The_Radio_Button() throws Throwable {
		radiobutton(pom.getInstanceRdobtn().getRadio());
	    
	}

	@Then("^user Selecting The Continue And It Navigates To The Book A Hotel Page$")
	public void user_Selecting_The_Continue_And_It_Navigates_To_The_Book_A_Hotel_Page() throws Throwable {
		clickOnElement(pom.getInstanceRdobtn().getContinuebtn());
	}

	@When("^user Entering The \"([^\"]*)\" In The Firstname Field$")
	public void user_Entering_The_In_The_Firstname_Field(String Firstname) throws Throwable {
		//String firstName = File_Read_Manager.getInstantFRM().getInstanceCR().getFirstName();

		passInput(pom.getIntanceBook().getFstName(), Firstname);
	   
	}

	@When("^user Entering The \"([^\"]*)\" In The Lastname Field$")
	public void user_Entering_The_In_The_Lastname_Field(String Lastname) throws Throwable {
		passInput(pom.getIntanceBook().getLstName(), Lastname);
	   
	}

	@When("^user Entering The \"([^\"]*)\" In The Billing Address Field$")
	public void user_Entering_The_In_The_Billing_Address_Field(String Address) throws Throwable {
		passInput(pom.getIntanceBook().getAddress(), Address);
	   
	}

	@When("^user Entering The \"([^\"]*)\" In The Cardnumber Field$")
	public void user_Entering_The_In_The_Cardnumber_Field(String Cardnumber) throws Throwable {
		passInput(pom.getIntanceBook().getCreditCardnumber(), Cardnumber);
	    
	}

	@When("^user Selecting The \"([^\"]*)\" From Cardtype DropDown$")
	public void user_Selecting_The_From_Cardtype_DropDown(String Cardtype) throws Throwable {
		hotelBooking(pom.getIntanceBook().getCCtype(), Cardtype);
	    
	}

	@When("^user Selecting The \"([^\"]*)\" From ExpiryMonth DropDown$")
	public void user_Selecting_The_From_ExpiryMonth_DropDown(String ExpiryMonth) throws Throwable {
		hotelBooking(pom.getIntanceBook().getMonth(), ExpiryMonth);
	    
	}

	@When("^user Selecting The \"([^\"]*)\" From ExpiryYear DropDown$")
	public void user_Selecting_The_From_ExpiryYear_DropDown(String  ExpiryYear) throws Throwable {
		hotelBooking(pom.getIntanceBook().getYear(),  ExpiryYear);

	}

	@When("^user Entering The \"([^\"]*)\" In The CVVnumber Field$")
	public void user_Entering_The_In_The_CVVnumber_Field(String CVVnumber) throws Throwable {
		 
		passInput(pom.getIntanceBook().getCvv(), CVVnumber);
	    
	}

	@Then("^user Click The Booknow Button And It Navigates To The Select Hotel Page$")
	public void user_Click_The_Booknow_Button_And_It_Navigates_To_The_Select_Hotel_Page() throws Throwable {
		
clickOnElement(pom.getIntanceBook().getBooknow());
		
		Thread.sleep(5000);
	   
	}
	@Then("^user Click The Logout Button And It Navigates To The Exit Page$")
	public void user_Click_The_Logout_Button_And_It_Navigates_To_The_Exit_Page() throws Throwable {
		clickOnElement(pom.getIntanceLogout().getSignout());
	}

	@Given("^user TkesScreenshot$")
	public void user_TkesScreenshot() throws Throwable {
		screenShot("F:\\musheik2\\Sneha Projects\\Maven\\Adcitin_And_Cucumber\\Screenshots\\ada.png");
	   
	}
/*	@When("^user Selecting The Location From HotelLocation DropDown$")
	public void user_Selecting_The_Location_From_HotelLocation_DropDown() throws Throwable {
		hotelBooking(pom.getInstantSearchHotel().getHotelLocation(), 5);
	   
	}

	@When("^user Selecting The Hotel From HotelSelection DropDown$")
	public void user_Selecting_The_Hotel_From_HotelSelection_DropDown() throws Throwable {
		hotelBooking(pom.getInstantSearchHotel().getHotelname(), 4);
	   
	}

	@When("^user Selecting The RoomType From RoomType DropDown$")
	public void user_Selecting_The_RoomType_From_RoomType_DropDown() throws Throwable {
		hotelBooking(pom.getInstantSearchHotel().getRoomtype(), 4);
	  
	}

	@When("^user Selecting The Numb Of Rooms From Numbers Of Room  DropDown$")
	public void user_Selecting_The_Numb_Of_Rooms_From_Numbers_Of_Room_DropDown() throws Throwable {
		hotelBooking(pom.getInstantSearchHotel().getNumberOfRooms(), 10);
	   
	}

	@When("^user Selecting The Adult Per Room From Adult Per Room DropDown$")
	public void user_Selecting_The_Adult_Per_Room_From_Adult_Per_Room_DropDown() throws Throwable {
		hotelBooking(pom.getInstantSearchHotel().getAdultPerRoom(), 4);
	   
	}

	@When("^user Selecting The Child Per Room From Child Per Room DropDown$")
	public void user_Selecting_The_Child_Per_Room_From_Child_Per_Room_DropDown() throws Throwable {
		hotelBooking(pom.getInstantSearchHotel().getChildPerRoom(), 3);
	  
	}

	@Then("^user Click The search Button And It Navigates To The Select Hotel Page$")
	public void user_Click_The_search_Button_And_It_Navigates_To_The_Select_Hotel_Page() throws Throwable {
		clickOnElement(pom.getInstantSearchHotel().searchkey);
	   
	}

	@When("^user Selecting The Radio Button$")
	public void user_Selecting_The_Radio_Button() throws Throwable {
		radiobutton(pom.getInstanceRdobtn().getRadio());
	   
	}

	@Then("^user Selecting The Continue And It Navigates To The Book A Hotel Page$")
	public void user_Selecting_The_Continue_And_It_Navigates_To_The_Book_A_Hotel_Page() throws Throwable {
		clickOnElement(pom.getInstanceRdobtn().getContinuebtn());
	  
	}

	@When("^user Entering The Firstname In The Firstname Field$")
	public void user_Entering_The_Firstname_In_The_Firstname_Field() throws Throwable {
		String firstName = File_Read_Manager.getInstantFRM().getInstanceCR().getFirstName();

		passInput(pom.getIntanceBook().getFstName(), firstName);
	  
	}

	@When("^user Entering The Lastname In The Lastname Field$")
	public void user_Entering_The_Lastname_In_The_Lastname_Field() throws Throwable {
		String lastName = File_Read_Manager.getInstantFRM().getInstanceCR().getLastName();

		passInput(pom.getIntanceBook().getLstName(), lastName);}

	@When("^user Entering The Billing Address In The Billing Address Field$")
	public void user_Entering_The_Billing_Address_In_The_Billing_Address_Field() throws Throwable {
		String address = File_Read_Manager.getInstantFRM().getInstanceCR().getAddress();

		passInput(pom.getIntanceBook().getAddress(), address);
	    
	}

	@When("^user Entering The Cardnumber In The Cardnumber Field$")
	public void user_Entering_The_Cardnumber_In_The_Cardnumber_Field() throws Throwable {
		String cardNumber = File_Read_Manager.getInstantFRM().getInstanceCR().getCardNumber();
		passInput(pom.getIntanceBook().getCreditCardnumber(), cardNumber);
	   
	}

	@When("^user Selecting The Cardtype From Cardtype DropDown$")
	public void user_Selecting_The_Cardtype_From_Cardtype_DropDown() throws Throwable {
		hotelBooking(pom.getIntanceBook().getCCtype(), 1);
	  
	}

	@When("^user Selecting The ExpiryMonth From ExpiryMonth DropDown$")
	public void user_Selecting_The_ExpiryMonth_From_ExpiryMonth_DropDown() throws Throwable {
		hotelBooking(pom.getIntanceBook().getMonth(), 12);
	    
	}

	@When("^user Selecting The ExpiryYear From ExpiryYear DropDown$")
	public void user_Selecting_The_ExpiryYear_From_ExpiryYear_DropDown() throws Throwable {
		hotelBooking(pom.getIntanceBook().getYear(), 12);
	    
	}

	@When("^user Entering The CVVnumber In The CVVnumber Field$")
	public void user_Entering_The_CVVnumber_In_The_CVVnumber_Field() throws Throwable {
		passInput(pom.getIntanceBook().getCvv(), "365");
	  
	}

	@Then("^user Click The Booknow Button And It Navigates To The Select Hotel Page$")
	public void user_Click_The_Booknow_Button_And_It_Navigates_To_The_Select_Hotel_Page() throws Throwable {
		clickOnElement(pom.getIntanceBook().getBooknow());
		
		Thread.sleep(5000);
	
	   
	}
	

	@Then("^user Click The Logout Button And It Navigates To The Exit Page$")
	public void user_Click_The_Logout_Button_And_It_Navigates_To_The_Exit_Page() throws Throwable {
		clickOnElement(pom.getIntanceLogout().getSignout());
	}


	@Given("^user TkesScreenshot$")
	public void user_TkesScreenshot() throws Throwable {
		screenShot("F:\\musheik2\\Sneha Projects\\Maven\\Adcitin_And_Cucumber\\Screenshots\\ada.png");
	}
	
*/
}
