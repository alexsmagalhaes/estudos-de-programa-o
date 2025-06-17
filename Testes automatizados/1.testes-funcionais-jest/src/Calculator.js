class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) throw new Error("Division by zero is not allowed.");
    return a / b;
  }

  power(base, exponent) {
    return base ** exponent;
  }

  root(number, n = 2) {
    if (number < 0 && n % 2 === 0) {
      throw new Error("Cannot extract even root of negative number.");
    }
    return number ** (1 / n);
  }
}

module.exports = Calculator;
