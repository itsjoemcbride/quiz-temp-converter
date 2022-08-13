import { Given, Then, When } from "@cucumber/cucumber";
import tryConvert from "../../app/index.js";

Given("I have a temperature of {float}° {unit}", (temp2Convert, unit) => {
  this.temp2Convert = temp2Convert;
});

When("I convert it to degrees {unit}", (unit) => {
  this.convertedTemp = tryConvert(this.temp2Convert, unit);
});

Then("I see {float}° {unit}", (convertedTemp) => {});
