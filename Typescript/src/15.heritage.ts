class Person {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    private readonly age: number,
    protected readonly cpf: string
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
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public school: string
  ) {
    super(name, lastName, age, cpf);
  }

  public getFullName(): string {
    return super.getFullName();
  }
}

class Client extends Person {
  public getFullName(): string {
    return "Client" + this.name + " " + this.lastName;
  }
}

const student = new Student("Alex", "Magalhaes", 23, "000.000.000-00", "EEEP");
const client = new Client("Joao", "Silva", 42, "111.111.111-11");
