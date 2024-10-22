'use strict';

var assert = require('assert');
const { Given, When, Then } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");

Given(/^I try to find Text Button in Sample App/, async function () {
  await this.driver.wait(
    until.elementLocated(
      By.xpath(
        '/XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[1]'
      )
    ), 30000
  ).click();
});

When(/^I type in "([^"]*)" in the Text Input field/, async function (textMessage) {
  var textInput = await this.driver.wait(
    until.elementLocated(
      By.xpath(
        '/XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField'
      ), 30000
    )
  );
  await textInput.sendKeys('hello@browserstack.com\n');
  await this.driver.sleep(5000);
});

Then(/^I should get the entered text in the Text Output field/, async function () {
  var textOutput = await this.driver.findElement(
    By.xpath(
      '/XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeStaticText'
    )
  ).getText();

  assert(textOutput === 'hello@browserstack.com');
});
