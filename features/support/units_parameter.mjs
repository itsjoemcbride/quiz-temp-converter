import { defineParameterType } from "@cucumber/cucumber";

defineParameterType({
  name: "unit",
  regexp: /C|F|Celsius|Fahrenheit/,
  transformer(name) {
    return name.startsWith("C") ? "toCelsius" : "toFahrenheit"; // if name starts with c assume celsius, else assume fahrenheit
  },
});
