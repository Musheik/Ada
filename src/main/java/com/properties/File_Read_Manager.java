package com.properties;

import java.io.IOException;

public class File_Read_Manager {

	
	private File_Read_Manager() {
		// this constructor preventing us creating obj in runner class
	}
	
	
	// to call  instant cr we have to create obt for cr in runner class to avoid that..so we create another meth
	
	public static File_Read_Manager getInstantFRM() {
		File_Read_Manager FRM = new File_Read_Manager();
		
		return FRM;

	}
	
	
	//bnow we are craeting obj for CR.. but here we keep that process in method
	
	public Configuration_Reader getInstanceCR() throws IOException {
		Configuration_Reader CR = new Configuration_Reader();
		
		return CR;

	}
	
	
	
	
}
