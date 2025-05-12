interface Name {
  name: string;
}

interface LastName {
  lastName: string;
}

type FullName = {
  fullName: () => string;
};

type PersonProps = Name & LastName & FullName;

interface PersonProps2 extends Name, LastName, FullName {}

class PersonClass implements PersonProps {
  constructor(public name: string, public lastName: string) {}

  fullName(): string {
    return this.name + " " + this.lastName;
  }
}

const personTypeTest = new PersonClass("Alex", "Magalhães");
personTypeTest.fullName;
