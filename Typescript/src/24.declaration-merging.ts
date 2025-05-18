interface Declaration {
  name: string;
}

interface Declaration {
  readonly age: number;
}

interface Declaration {
  readonly address: readonly string[];
}

interface Declaration {
  readonly details?: string;
}

const person1: Declaration = {
  name: "Alex",
  age: 23,
  address: ["Brazil"],
};
