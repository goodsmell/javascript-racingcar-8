import { Car } from './Car.js';
export class CarsData {
  #carList;

  constructor(carNames) {
    this.#carList = carNames.map((n) => new Car(n));
  }

  forEach(fn) {
    this.#carList.forEach(fn);
  }

  currentSnapShot() {
    return this.#carList.map((c) => ({ carName: c.name, position: c.position }));
  }

  winners() {
    const maxPosition = Math.max(...this.#carList.map((c) => c.position));
    return this.#carList.filter((c) => c.position === maxPosition).map((c) => c.name);
  }
}
