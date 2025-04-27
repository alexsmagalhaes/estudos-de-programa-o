class Company {
  public readonly name: string;
  private readonly employee: Employee[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  public addEmployee(employ: Employee) {
    this.employee.push(employ);
  }

  public getName() {
    return this.name;
  }
}

class Employee {
  constructor(public readonly name: string, public readonly lastName: string) {}

  protected getName() {
    return this.name;
  }
}

const employ1 = new Employee("Joao", "Silva");

const company1 = new Company("Apple", "00.000.000/0001-00");
console.log(company1.name);
