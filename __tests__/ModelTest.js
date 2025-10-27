import { Car } from '../src/model/Car.js';

describe('Car 클래스', () => {
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
