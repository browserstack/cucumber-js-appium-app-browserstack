'use strict';

var assert = require('assert');
const { When, Then } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");

When(/^I start test on the Local Sample App$/, async function () {
  await this.driver.wait(
    until.elementLocated(
      By.xpath(
        '/XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton/XCUIElementTypeStaticText'
      )
    ), 30000
  ).click();
});

Then(/^I should see "([^"]*)"$/, async function (sourceMatch) {
  var textElement = await this.driver.wait(
    until.elementLocated(
      By.xpath(
        '/XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField'
      ), 30000
    )
  ).getText();

  assert(textElement.includes(sourceMatch));
});
