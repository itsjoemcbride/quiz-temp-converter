import { defineParameterType } from "@cucumber/cucumber";

defineParameterType({
  name: "units",
  regexp: /C|F|Celsius|Fahrenheit/,
  transformer(valueOfIncomingUnitsThatMightStartWithC) {
    return valueOfIncomingUnitsThatMightStartWithC.startsWith("C")
      ? "toCelsius"
      : "toFahrenheit";
  },
});
