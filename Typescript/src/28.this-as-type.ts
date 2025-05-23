class Calculator {
  constructor(public number: number) {}

  add(number: number): this {
    this.number += number;
    return this;
  }

  minus(number: number): this {
    this.number -= number;
    return this;
  }

  times(number: number): this {
    this.number *= number;
    return this;
  }

  divider(number: number): this {
    this.number /= number;
    return this;
  }
}

class SubCalculator extends Calculator {
  pow(number: number) {
    this.number **= number;
    return this;
  }
}

const calculator = new SubCalculator(100);
calculator.add(10).times(5).pow(2);

console.log(calculator.number);
