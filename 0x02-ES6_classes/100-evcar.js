import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(range, brand, motor, color) {
    super(brand, motor, color);
    this._range = range;
  }

  // eslint-disable-next-line
  cloneCar () {
    return new Car();
  }
}
