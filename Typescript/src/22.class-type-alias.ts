type Name = {
  name: string;
};

type LastName = {
  lastName: string;
};

type FullName = {
  fullName: () => string;
};

class PersonClass implements Name, LastName, FullName {
  constructor(public name: string, public lastName: string) {}

  fullName(): string {
    return this.name + " " + this.lastName;
  }
}

const personTypeTest = new PersonClass("Alex", "Magalhães");
personTypeTest.fullName;
