package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class AddtoCartStepDefinitions {
	WebDriver driver;
	
	@Given("^User is already on the login page$")
	public void user_is_already_on_the_login_page()
	{
		
     WebDriverManager.chromedriver().setup();
		
		driver=new ChromeDriver();
		
		driver.get("https://www.saucedemo.com");
		driver.manage().window().maximize();
		
	}
	
	@Given("^User is already logged in with \"(.*?)\" and \"(.*?)\" credentials$")
	public void user_is_already_logged_in_with_and_credentials(String username, String password)
	{
		driver.findElement(By.id("user-name")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
		driver.findElement(By.id("login-button")).click();
		
	}
	
	
	@When("^User adds Fleece Jacket to cart$")
	public void user_adds_Fleece_Jacket_to_cart()
	{
		driver.findElement(By.id("add-to-cart-sauce-labs-fleece-jacket")).click();
		
	}
	
	@When("^User adds Onesie to cart$")
	public void user_adds_Onesie_to_cart() 
	{
		driver.findElement(By.id("add-to-cart-sauce-labs-onesie")).click();
		
	}
	
	@Then("^User verifies the cart for the products added$")
	public void user_verifies_the_cart_for_the_products_added() throws InterruptedException 
	{
		WebElement cartElement=driver.findElement(By.xpath("//a[@class=\"shopping_cart_link\"]"));
		cartElement.click();
		//System.out.println("The cart value is:"+cartElement.getText());
		Thread.sleep(5000);
		
	}
	
	@Then("^User closes the browser$")
	public void user_closes_the_browser() 
	{
		driver.quit();
	}

}
