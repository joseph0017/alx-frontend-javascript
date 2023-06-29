import Car from './10-car';

export default class EVCar extends Car {
  constructor(range, brand, motor, color) {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return new Car();
  }
}
