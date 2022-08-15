import { defineParameterType } from "@cucumber/cucumber";

defineParameterType({
  name: "units",
  regexp: /\s?C|\s?F|\s?Celsius|\s?Fahrenheit/,
  transformer(valueOfIncomingUnitsThatMightStartWithC) {
    return valueOfIncomingUnitsThatMightStartWithC.startsWith("C")
      ? "toCelsius"
      : "toFahrenheit";
  },
});
