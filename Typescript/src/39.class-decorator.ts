function Decorator<T extends new (...args: any[]) => {}>(target: T) {
  return class extends target {
    name: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = "Decorated Animal";
    }
  };
}

@Decorator
class Animal {
  constructor(public color: string) {}
}

const animal = new Animal("black");

console.log(animal.color);
console.log((animal as any).name);


function Logger(constructor: Function) {
  console.log(`Classe ${constructor.name} foi registrada.`);
}

@Logger
class Pessoa {
  constructor(public nome: string) {}
}

const p = new Pessoa("Alex");
console.log(p.nome);
