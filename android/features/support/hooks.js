'use strict';

const { Builder, Capabilities, By, until } = require("selenium-webdriver");
const { BeforeAll, Before, After, AfterAll } = require("@cucumber/cucumber");

let driver;

var createBrowserStackSession = function(){
  return new Builder().
    usingServer('http://localhost:4444/wd/hub').
    build();
}

// Before(function (scenario, callback) {
//   var world = this;
//   world.driver = createBrowserStackSession();
//   callback();
// });

// After(function(scenario, callback){
//   this.driver.quit().then(function(){
//     callback();
//   });
// });

BeforeAll(async function() {
  driver = createBrowserStackSession();
  const skipButton = await driver.wait(
    until.elementLocated(By.id('org.wikipedia.alpha:id/fragment_onboarding_skip_button')),
    30000
  );
  await skipButton.click();

  const searchSelector = await driver.wait(
    until.elementLocated(By.xpath("//*[@content-desc='Search Wikipedia']")),
    30000
  );
  await searchSelector.click();
});

// Before(function (scenario, callback) {
//   var world = this;
//   world.driver = driver;
//   callback();
// });

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
