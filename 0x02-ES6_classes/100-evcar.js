import Car from "./10-car.js";

export default class EVCar extends Car {
  constructor(range, brand, motor, color) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new Car();
  }
}
