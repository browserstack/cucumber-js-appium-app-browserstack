const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const assert = require('assert');

// Increase timeout for Appium commands
setDefaultTimeout(60 * 1000);


Given('I tap on the search bar for moduleC', async function() {
  const searchSelector = await this.driver.wait(
    until.elementLocated(By.xpath("//*[@content-desc='Search Wikipedia']")),
    30000
  );
  await searchSelector.click();
});

When('flaky test in moduleC', async function() {
  assert(Math.random() > 0.5, 'Flaky test failed');
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
