package com.Adcitin_And_Cucumber;

import java.awt.AWTException;

import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.util.List;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.ui.Select;

import okhttp3.internal.connection.RouteSelector.Selection;

public class BaseClass {

	public static WebDriver driver;

// 1)) browser launch
	public static WebDriver browserLaunch(String browserName) {

		if (browserName.equalsIgnoreCase("Chrome")) {
			System.setProperty("webdriver.chrome.driver",
					System.getProperty("user.dir") + "\\Drivers\\chromedriver.exe");

			driver = new ChromeDriver();

			driver.manage().window().maximize();
		} else if (browserName.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + "\\Drivers\\geckodriver.exe");

			driver = new FirefoxDriver();

			driver.manage().window().maximize();

		} else if (browserName.equalsIgnoreCase("edge")) {
			System.setProperty("webdriver.edge.driver", System.getProperty("user.dir") + "\\Drivers\\msedgedriver.exe");

			driver = new EdgeDriver();

			driver.manage().window().maximize();

		}

		return driver;

	}

	// 2) get url
	public static void getUrl(String url) {
		driver.get(url);

	}

	// 3) close browser
	public static void closeBrowser() {
		driver.close();
	}

	// 4) quit browser
	public static void quitBrowser() {
		driver.quit();

	}

	// 5) sendkeys..
	public static void passInput(WebElement element, String input) {

		element.sendKeys(input);

	}

	// 6) clickon element

	public static void clickOnElement(WebElement element) {
		element.click();
	}

	// 7)) Dropdown

	public static void hotelBooking(WebElement element, String value) {
		Select nameoflocation = new Select(element);

		nameoflocation.selectByValue(value);;
	}

	// 8) select radio

	public static void radiobutton(WebElement element) {
		element.click();
		boolean isradioenabled = element.isEnabled();

		System.out.println(" radio button is enables !!! === " + isradioenabled);

	}

	// 9) screen shots

	public static void screenShot(String path) throws IOException {

		TakesScreenshot snap = (TakesScreenshot) driver;
		File source = snap.getScreenshotAs(OutputType.FILE);

		File dest = new File(path);

		FileHandler.copy(source, dest);

	}

	// NAVIGATE

	public static void navigationMeth(String command, String url) {
		if (command.equalsIgnoreCase("toUrl")) {
			driver.navigate().to(url);
		}

		else if (command.equalsIgnoreCase("back")) {
			driver.navigate().back();
		}

		else if (command.equalsIgnoreCase("forward")) {
			driver.navigate().forward();
		}

		else if (command.equalsIgnoreCase("refresh")) {
			driver.navigate().refresh();
		}
	}

	// Alert

	public static void switchToalertBoxAcceptorDismiss(String command, String keysToSend) {
		if (command.equalsIgnoreCase("accept")) {
			driver.switchTo().alert().accept();
		} else if (command.equalsIgnoreCase("dismiss")) {
			driver.switchTo().alert().dismiss();
		}

		else if (command.equalsIgnoreCase("gettext")) {
			String text = driver.switchTo().alert().getText();

			System.out.println(text);

			driver.switchTo().alert().sendKeys(keysToSend);
		}

	}

	// Action and robot class
	public static void actionsMouse(String command, WebElement element, WebElement from, WebElement to)
			throws AWTException {
		Actions kamal = new Actions(driver);

		Robot rajini = new Robot();

		if (command.equalsIgnoreCase("left")) {
			kamal.click(element).build().perform();
		} else if (command.equalsIgnoreCase("double")) {
			kamal.doubleClick(element).build().perform();

		} else if (command.equalsIgnoreCase("context")) {
			kamal.contextClick(element).build().perform();
			rajini.keyPress(KeyEvent.VK_PAGE_DOWN);

			rajini.keyRelease(KeyEvent.VK_PAGE_DOWN); // -->open limk in new tab

			rajini.keyPress(KeyEvent.VK_PAGE_DOWN);

			rajini.keyRelease(KeyEvent.VK_PAGE_DOWN); // ----->open link in new window

			rajini.keyPress(KeyEvent.VK_PAGE_DOWN);

			rajini.keyRelease(KeyEvent.VK_PAGE_DOWN); // ----->private window

			rajini.keyPress(KeyEvent.VK_ENTER);

			rajini.keyRelease(KeyEvent.VK_ENTER);

		} else if (command.equalsIgnoreCase("draganddrop")) {
			kamal.dragAndDrop(from, to).build().perform();

		}

	}

	//list
	public static void listSize(List<WebElement> element) {
		
		int size = element.size();
		System.out.println(size);
		
	}
	
	//single frame
	public static void singleFrameHandling(WebElement element) {

		driver.switchTo().frame(element);

	}
	
	// multiframe
	
}
