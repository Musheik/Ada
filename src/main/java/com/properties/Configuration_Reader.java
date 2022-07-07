package com.properties;

import java.io.File;
import java.io.FileInputStream;

import java.io.IOException;
import java.util.Properties;

public class Configuration_Reader {
	
	public static Properties loaddata; 
	
	public  Configuration_Reader () throws IOException {
		
		//path of the file
		File datas = new File("F:\\musheik2\\Sneha Projects\\Maven\\MavenProject-SnehaMam\\src\\main\\java\\com\\properties\\ Adactin.properties");
		
		
		// command to read the file
		FileInputStream readdata =new FileInputStream(datas);
		
		
		// get the data command using getproperty class.. to access the get property inbuilt class we have to create an object
		
		loaddata = new Properties();
		// now load the data into  property class object
		
		loaddata.load(readdata);
	}

	
	
	public String getUrl() throws IOException {
		
	
		
		//now call using property
		
		String url = loaddata.getProperty("url");
		
		// now return
		
		return url;
		
	}
	
	public String getUsername() {
	
	
		// now call using property
		String username = loaddata.getProperty("username");
		
		return username;

	}
	
	public String getpassword() {
		
		
		// now call using property
		
		String password = loaddata.getProperty("password");
		
		return password;
	}
	
	public String getFirstName() {
		
		String firstname = loaddata.getProperty("firstname");
		
		return firstname;

	}
	
	
	
	public  String getLastName() {
		String lastname = loaddata.getProperty("lastname");
		
		return lastname;
		

	}
	
	
	
	public String getAddress() {
		String address = loaddata.getProperty("address");
		
		return address;

	}
	
	
	public String getCardNumber() {
		String creditCardNumber = loaddata.getProperty("cardnumber");
		
		return creditCardNumber;

	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
