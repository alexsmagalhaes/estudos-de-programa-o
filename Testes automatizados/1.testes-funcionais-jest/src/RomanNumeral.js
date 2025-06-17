class RomanNumeralConverter {
  constructor() {
    this.mapping = [
      [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
      [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
      [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
    ];
  }

  toRoman(number) {
    if (number <= 0 || number > 3999) {
      throw new Error("Number must be between 1 and 3999.");
    }
    let result = "";
    for (const [value, numeral] of this.mapping) {
      while (number >= value) {
        result += numeral;
        number -= value;
      }
    }
    return result;
  }
}

module.exports = RomanNumeralConverter;
