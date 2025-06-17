class Employee {
  constructor(name, baseSalary, position) {
    this.name = name;
    this.baseSalary = baseSalary;
    this.position = position.toUpperCase();
  }
}

class EmployeeSalaryCalculator {
  calculateNetSalary(employee) {
    const salary = employee.baseSalary;
    const position = employee.position;

    switch (position) {
      case "DEVELOPER":
        return salary >= 13000 ? salary * 0.8 : salary * 0.9;

      case "DBA":
        return salary >= 15000 ? salary * 0.75 : salary * 0.85;

      case "TESTER":
        return salary >= 15000 ? salary * 0.75 : salary * 0.85;

      case "MANAGER":
        return salary >= 18000 ? salary * 0.7 : salary * 0.8;

      default:
        throw new Error(`Unknown position: ${position}`);
    }
  }
}

module.exports = { Employee, EmployeeSalaryCalculator };
