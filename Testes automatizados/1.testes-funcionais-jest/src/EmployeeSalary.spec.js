const { EmployeeSalaryCalculator, Employee } = require("./EmployeeSalary");

describe("Testes da classe de salários de funcionários", () => {
  let calculator;

  beforeEach(() => {
    calculator = new EmployeeSalaryCalculator();
  });

  it("Teste de salario DEVELOPER igual ou acima de 13 mil", () => {
    const employee = new Employee("Alex", 25000, "DEVELOPER");
    const salary = calculator.calculateNetSalary(employee);

    expect(salary).toBe(20000);
  });

  it("Teste de salario DEVELOPER menor que 13 mil", () => {
    const employee = new Employee("Alex", 12000, "DEVELOPER");
    const salary = calculator.calculateNetSalary(employee);

    expect(salary).toBe(10800);
  });

  it("Teste de salario DBA igual ou acima de 15 mil", () => {
    const employee = new Employee("Alex", 15000, "DBA");
    const salary = calculator.calculateNetSalary(employee);

    expect(salary).toBe(11250);
  });

  it("Teste de salario DBA menor que 15 mil", () => {
    const employee = new Employee("Alex", 12000, "DBA");
    const salary = calculator.calculateNetSalary(employee);

    expect(salary).toBe(10200);
  });

  it("Teste de salario TESTER igual ou acima de 15 mil", () => {
    const employee = new Employee("Alex", 15000, "TESTER");
    const salary = calculator.calculateNetSalary(employee);

    expect(salary).toBe(11250);
  });

  it("Teste de salario TESTER menor que 15 mil", () => {
    const employee = new Employee("Alex", 12000, "TESTER");
    const salary = calculator.calculateNetSalary(employee);

    expect(salary).toBe(10200);
  });

    it("Teste de salario MANAGER igual ou acima de 18 mil", () => {
    const employee = new Employee("Alex", 20000, "MANAGER");
    const salary = calculator.calculateNetSalary(employee);

    expect(salary).toBe(14000);
  });

  it("Teste de salario MANAGER menor que 18 mil", () => {
    const employee = new Employee("Alex", 16000, "MANAGER");
    const salary = calculator.calculateNetSalary(employee);

    expect(salary).toBe(12800);
  });
});
