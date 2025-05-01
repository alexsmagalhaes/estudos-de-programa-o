class Vehicle {
  constructor(private _maxSpeed: number, private _name: string) {}

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set maxSpeed(maxSpeed: number) {
    this._maxSpeed = maxSpeed;
  }

  get maxSpeed() {
    return this._maxSpeed;
  }
}

console.log(new Vehicle(250, "Car").name);
