export class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  move() {
    this.#position += 1;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}
