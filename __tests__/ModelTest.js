import { Car } from '../src/model/Car.js';
import { CarsData } from '../src/model/CarsData';
describe('자동차 생성 및 이동 - car class', () => {
  const car = new Car('pobi');
  let move = 0;

  test('자동차가 생성될 때 이름이 설정되어야 한다.', () => {
    expect(car.name).toBe('pobi');
  });

  test('초기 position은 0이어야 한다.', () => {
    expect(car.position).toBe(0);
  });

  test('move()를 호출하면 position이 1 증가한다.', () => {
    car.move();
    move++;
    expect(car.position).toBe(move);
  });

  test('move()가 여러 번 호출되면 호출 횟수만큼 position이 증가한다.', () => {
    car.move();
    car.move();
    car.move();
    move += 3;
    expect(car.position).toBe(move);
  });
});

describe('라운드 스냅샷', () => {
  test('초기 스냅샷은 모든 자동차의 위치가 0이어야 한다', () => {
    const cars = new CarsData(['a', 'b']);
    expect(cars.currentSnapShot()).toEqual([
      { carName: 'a', position: 0 },
      { carName: 'b', position: 0 },
    ]);
  });

  test('스냅샷은 현재 라운드까지의 이동 결과를 반영해야 한다', () => {
    const cars = new CarsData(['a', 'b', 'c']);
    cars.forEach((car) => {
      if (car.name === 'a' || car.name === 'c') car.move();
    });
    expect(cars.currentSnapShot()).toEqual([
      { carName: 'a', position: 1 },
      { carName: 'b', position: 0 },
      { carName: 'c', position: 1 },
    ]);
  });
});

describe('우승자 판정', () => {
  test('최대로 이동한 자동차를 우승자로 판정해야 한다', () => {
    const cars = new CarsData(['a', 'b']);
    cars.forEach((car) => {
      if (car.name === 'a') {
        car.move();
        car.move();
      }
      if (car.name === 'b') {
        car.move();
      }
    });
    expect(cars.winners()).toEqual(['a']);
  });

  test('최대 이동 거리가 같으면 공동 우승으로 판정해야 한다', () => {
    const cars = new CarsData(['pobi', 'woni', 'jun']);
    cars.forEach((car) => {
      if (car.name === 'pobi' || car.name === 'woni') {
        car.move();
        car.move();
      }
      if (car.name === 'jun') {
        car.move();
      }
    });
    expect(cars.winners()).toEqual(['pobi', 'woni']);
  });
});
