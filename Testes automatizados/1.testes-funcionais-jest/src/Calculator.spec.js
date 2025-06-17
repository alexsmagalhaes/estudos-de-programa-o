const Calculator = require("./Calculator");

describe("Testes da calculadora", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  it("Soma de números", () => {
    expect(calc.add(1, 2)).toBe(3);
  });

  it("Subtração de números", () => {
    expect(calc.subtract(1, 2)).toBe(-1);
  });

  it("Multiplicação de números", () => {
    expect(calc.multiply(2, 2)).toBe(4);
  });

  it("Divisão de números", () => {
    expect(calc.divide(4, 2)).toBe(2);
  });

  it("Divisão por 0", () => {
    expect(() => calc.divide(11, 0)).toThrow(
      "Division by zero is not allowed."
    );
  });

  it("Exponenciação de números", () => {
    expect(calc.power(4, 2)).toBe(16);
  });

  it("Raiz quadrada de números, valor default", () => {
    expect(calc.root(16)).toBe(4);
  });

  it("Radiciação com números diferentes do default", () => {
    expect(calc.root(8, 3)).toBe(2);
  });

  it("Radiciação com números diferentes do default", () => {
    expect(calc.root(8, 3)).toBe(2);
  });

  it("Radiciação com número negativo", () => {
    expect(() => calc.root(-8, 2)).toThrow(
      "Cannot extract even root of negative number."
    );
  });
});
