export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

export class Stack<T> {
  private contador = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.contador] = element;
    this.contador++;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.contador--;
    const element = this.elements[this.contador];
    delete this.elements[this.contador];

    return element;
  }

  lenght() {
    return this.contador;
  }

  show(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack();
stack.push("value");
stack.show();

stack.pop();
stack.show
