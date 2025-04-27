class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string
  ) {}

  public getAge(): number {
    return this.age;
  }

  protected getCpf(): string {
    return this.cpf;
  }

  public getFullName(): string {
    return this.name + " " + this.lastName;
  }
}

class Student extends Person {
  public getFullName(): string {
    return "Student" + this.name + " " + this.lastName;
  }
}

class Client extends Person {
  public getFullName(): string {
    return "Client" + this.name + " " + this.lastName;
  }
}

const student = new Student("Alex", "Magalhaes", 23, "000.000.000-00");
const client = new Client("Joao", "Silva", 42, "111.111.111-11");
