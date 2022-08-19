package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions(
		features="/Users/lgounder/git/repository/cucumber/src/main/java/Features/loginone.feature",
		glue ={"stepDefinitions"},
		plugin ={"pretty","html:test-output","json:json_output/cucumber.json",
				"junit:junit_xml/cucumber.xml"},//to generate different type of reporting
		dryRun=false, //to check if the mapping is proper between feature & step definition file
		monochrome = true, //display the console output in proper readable format
		strict = false//to check if any step is not defined in step definition file
		
		)

public class TestRunner {

}
