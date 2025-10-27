import { CarsData } from '../model/CarsData.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const ADVANCE_RANDOM_NUMBER = 4;

export class Racing {
  start(carNames, tryCount, onRound) {
    const cars = new CarsData(carNames);

    for (let i = 0; i < tryCount; i++) {
      this.#runRound(cars);
    }

    return { winners: cars.winners() };
  }

  #runRound(cars) {
    cars.forEach((car) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= ADVANCE_RANDOM_NUMBER) car.move();
    });
  }


}
