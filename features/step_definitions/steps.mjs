import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "expect";
import tryConvert from "../../app/index.js";

Given("I have a temperature of {float}°{units}", function (temp2Convert, _) {
  // Bind "temp2Convert" to the global this scope so it can be used in subsequent steps.
  // 'this' WILL NOT WORK properly when used in an arrow function.
  this.temp2Convert = temp2Convert;
});

When(
  "I convert it to degrees {units}",
  function (conversion2PerformFromOurTransformer) {
    this.convertedTemp = tryConvert(
      this.temp2Convert,
      conversion2PerformFromOurTransformer
    );
  }
);

Then("I see {float}°{units}", function (expected, _) {
  const expectHelper = () => {
    expect(this.convertedTemp).toBe(expected.toString());
  };

  expectHelper();
});

Given("I have non-numerical input", () => {});

Then('I "see" a blank string', function () {
  // Write code here that turns the phrase above into concrete actions
  expect(this.convertedTemp).toBe("");
});
