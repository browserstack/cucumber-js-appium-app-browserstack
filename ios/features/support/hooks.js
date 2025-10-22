'use strict';

const { Builder, Capabilities, By, until } = require("selenium-webdriver");
const { BeforeAll, Before, After, AfterAll } = require("@cucumber/cucumber");

let driver;

var createBrowserStackSession = function(){
  return new Builder().
    usingServer('http://localhost:4444/wd/hub').
    build();
}

BeforeAll(async function() {
  driver = createBrowserStackSession();
  // const skipButton = await driver.wait(
  //   until.elementLocated(By.id('org.wikipedia.alpha:id/fragment_onboarding_skip_button')),
  //   30000
  // );
  // await skipButton.click();

  // const searchSelector = await driver.wait(
  //   until.elementLocated(By.xpath("//*[@content-desc='Search Wikipedia']")),
  //   30000
  // );
  // await searchSelector.click();


  // const textButtonSelector = await driver.wait(
  //   until.elementLocated(By.xpath("//*[@content-desc='Text Button']")),
  //   30000
  // );
  // await textButtonSelector.click();

  // const textInputSelector = await driver.wait(
  //   until.elementLocated(By.xpath("//*[@content-desc='Text Input']")),
  //   30000
  // );
  // await textInputSelector.click();
  // await textInputSelector.addValue("hello@browserstack.com"+"\n");

  // const textOutputSelector = await driver.wait(
  //   until.elementLocated(By.xpath("//*[@content-desc='Text Output']")),
  //   30000
  // );


  await driver.wait(
    until.elementLocated(
      By.xpath(
        '/XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[1]'
      )
    ), 30000
  ).click();


  var textInput = await driver.wait(
    until.elementLocated(
      By.xpath(
        '/XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField'
      ), 30000
    )
  );
  await textInput.sendKeys('hello@browserstack.com\n');
  await driver.sleep(5000);

  var textOutput = await driver.findElement(
    By.xpath(
      '/XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeStaticText'
    )
  ).getText();
});

// No driver.quit() after each scenario
After(async function() {
  // Optionally reset app state between scenarios if needed
  // await this.driver.resetApp(); // Uncomment if you need to reset app state
});

// Cleanup driver after all scenarios have run
AfterAll(async function() {
  // console.log("Tearing down global driver instance...");
  if (driver) {
    await driver.quit();
  }
});

const { setWorldConstructor } = require('@cucumber/cucumber');
class CustomWorld {
  get driver() {
    return driver;
  }
}
setWorldConstructor(CustomWorld);
