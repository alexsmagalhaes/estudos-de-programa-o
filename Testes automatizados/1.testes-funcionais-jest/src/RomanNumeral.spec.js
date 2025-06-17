const RomanNumeralConverter = require("./RomanNumeral");

describe("testes números romanos", () => {
  let converter;

  beforeEach(() => {
    converter = new RomanNumeralConverter();
  });

  it("Conversão de número romano exato", () => {
    expect(converter.toRoman(10)).toBe("X");
  });

  it("Conversão de número romano composto", () => {
    expect(converter.toRoman(11)).toBe("XI");
  });

  it("Estouro do limite 0", () => {
    expect(() => converter.toRoman(0)).toThrow(
      "Number must be between 1 and 3999."
    );
  });

  it("Estouro do limite de negativos", () => {
    expect(() => converter.toRoman(-1)).toThrow(
      "Number must be between 1 and 3999."
    );
  });

  it("Estouro do limite da classe", () => {
    expect(() => converter.toRoman(4000)).toThrow(
      "Number must be between 1 and 3999."
    );
  });
});
