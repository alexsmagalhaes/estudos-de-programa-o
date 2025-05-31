interface PersonProtocol<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

const personProtocol: PersonProtocol = {
  name: "Alex",
  lastName: "Magalhaes",
  age: 23,
};
