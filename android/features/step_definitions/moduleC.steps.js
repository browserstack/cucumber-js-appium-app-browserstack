const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const assert = require('assert');

// Increase timeout for Appium commands
setDefaultTimeout(60 * 1000);

// Background steps
Given('I skip the Wikipedia onboarding for moduleC', async function() {
  const skipButton = await this.driver.wait(
    until.elementLocated(By.id('org.wikipedia.alpha:id/fragment_onboarding_skip_button')),
    30000
  );
  await skipButton.click();
});

Given('I tap on the search bar for moduleC', async function() {
  const searchSelector = await this.driver.wait(
    until.elementLocated(By.xpath("//*[@content-desc='Search Wikipedia']")),
    30000
  );
  await searchSelector.click();
});

// Module C specific step implementations - will fail naturally without try/catch
When('I randomly select a search term and search in moduleC', async function() {
  const useValidSelector = Math.random() > 0.5;
  let searchField;
  
  if (useValidSelector) {
    searchField = await this.driver.wait(
      until.elementLocated(By.id('org.wikipedia.alpha:id/search_src_text')),
      30000
    );
  } else {
    // This will fail naturally
    searchField = await this.driver.wait(
      until.elementLocated(By.id('falseSelector')),
      5000
    );
  }
  
  const randomTerm = Math.random() > 0.5 ? "BrowserStack" : "akjsdhfakjsdhf";
  await searchField.sendKeys(randomTerm);
  await this.driver.sleep(5000);
});

Then('there should be at least one result in moduleC', async function() {
  const allResults = await this.driver.findElements(By.className('android.widget.TextView'));
  assert(allResults.length > 0, 'Expected to find at least one result');
});

// This will fail naturally without try/catch
When('I try to click a non-existent element {string} in moduleC', async function(elementName) {
  const nonExistent = await this.driver.wait(
    until.elementLocated(By.xpath(`//*[@content-desc='${elementName}']`)),
    3000
  );
  await nonExistent.click();
});

Then('true should be true in moduleC', function() {
  assert.strictEqual(true, true);
});

Then('1 plus 1 should be 2 in moduleC', function() {
  assert.strictEqual(1 + 1, 2);
});

When('I run a flaky test with retry in moduleC', function() {
  const randomOutcome = Math.random() > 0.7;
  if (!randomOutcome) {
    throw new Error("Test failed, will retry...");
  }
});

Then('it should eventually pass or fail in moduleC', function() {
  // No-op
});

Then('{string} plus {string} should be {string} in moduleC', function(a, b, expected) {
  assert.strictEqual(a + b, expected);
});
