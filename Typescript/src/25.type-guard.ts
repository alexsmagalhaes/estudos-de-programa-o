interface PersonType {
  name: string;
}

interface Animal {
  noise: string;
}

type PersonOrAnimal = PersonType | Animal;

class StudentClass implements PersonType {
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal): void {
  if ("name" in obj || obj instanceof StudentClass) console.log(obj.name);
}
