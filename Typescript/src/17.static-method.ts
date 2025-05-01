class VehiclePattern {
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

class Car extends VehiclePattern {
  static parameters() {
    return ["maxSpeed", "name"];
  }
}

console.log(Car.parameters());
