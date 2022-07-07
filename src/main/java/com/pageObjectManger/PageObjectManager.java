package com.pageObjectManger;

import org.openqa.selenium.WebDriver;

import com.pomclass.BookAHotel;
import com.pomclass.LoginPage;
import com.pomclass.LogoutPage;
import com.pomclass.SearchHotelPage;
import com.pomclass.SelectHotelRadioBtn;


public class PageObjectManager {

	// 1)LOGIN
	public WebDriver driver; // null
	private LoginPage lp;

	public PageObjectManager(WebDriver driver2) {
		this.driver=driver2;
	}

	public LoginPage getInstanceLogin() {

		if (lp == null) {
			lp = new LoginPage(driver);
		}

		return lp;
	}
	
	
	//2) Search a hotel
	
	private SearchHotelPage obj2;
	
	public SearchHotelPage getInstantSearchHotel() {
		
		if (obj2==null) {
			obj2 = new SearchHotelPage(driver);
		}
		return obj2;
	}
	
	
	//3) RDIO BUTTON PAGE
	
	private SelectHotelRadioBtn rdobtn;

	public SelectHotelRadioBtn getInstanceRdobtn() {
		
		if (rdobtn==null) {
			
			rdobtn = new SelectHotelRadioBtn(driver);
			
		}
		return rdobtn;
	}
	
	
	// 4) book a hotel 
	
	
	private BookAHotel payment;
	
	public BookAHotel getIntanceBook() {
		
		if (payment==null) {
			payment = new BookAHotel(driver);
		}
		
		
		
		return payment;
	}
	// 5 )Logout
		private LogoutPage lo;
		
		public LogoutPage getIntanceLogout() {
			
			if (lo==null) {
				lo = new LogoutPage(driver);
			}
			return lo;
			
		}
	
	public static void main(String[] args) {
		
	}

}
