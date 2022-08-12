import tryConvert from "./index.js";

it("converts from celsius to fahrenheit", () => {
  expect(tryConvert(100, "toFahrenheit")).toBe("212");
});

it("converts from fahrenheit to celsius", () => {
  expect(tryConvert(50, "toCelsius")).toBe("10");
});

it("converts to celsius with non-numerical input", () => {
  expect(tryConvert("Jeff", "toCelsius")).toBe("");
});

it("converts to farenheit with non-numerical input", () => {
  expect(tryConvert("Jeff", "toFahrenheit")).toBe("");
});
