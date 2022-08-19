package stepDefinitions;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginOneStepDefinitions {
	WebDriver driver;
	
	@Given("^User is already on the saucedemo login page$")
	public void user_is_already_on_the_saucedemo_login_page()
	{
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		
		driver.get("https://www.saucedemo.com");
		driver.manage().window().maximize();
	}
	
	@When("^User enters username and password$")
	public void user_enters_username_and_password(DataTable credentials)
	{
		List<List<String>> dataList=credentials.raw();	
		driver.findElement(By.id("user-name")).sendKeys(dataList.get(0).get(0));
		driver.findElement(By.id("password")).sendKeys(dataList.get(0).get(1));
		
	}
	
	@When("^User clicks on the login button$")
	public void user_clicks_on_the_login_button()
	{
		driver.findElement(By.id("login-button")).click();
	}

	@Then("^User logged in successfully$")
	public void user_logged_in_successfully()
	{
		System.out.println("The page title is after login:"+driver.getTitle());
	}
	
	@Then("^User logs out and closes the browser$")
	public void user_logs_out_and_closes_the_browser() throws InterruptedException 
	{
		driver.findElement(By.xpath("//button[@id=\"react-burger-menu-btn\"]")).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//a[@id=\"logout_sidebar_link\"]")).click();
		Thread.sleep(5000);
		driver.quit();
	}
	
}
