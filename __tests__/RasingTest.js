import { Racing } from '../src/service/Racing.js';
import { MissionUtils } from '@woowacourse/mission-utils';

beforeEach(() => {
  jest.spyOn(MissionUtils.Random, 'pickNumberInRange');
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Racing', () => {
  test('라운드마다 각 자동차에 대해 0~9 난수를 생성한다', () => {
    MissionUtils.Random.pickNumberInRange
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(9)
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(4);

    const game = new Racing();
    const onRound = jest.fn();

    game.start(['a', 'b'], 2, onRound);

    expect(MissionUtils.Random.pickNumberInRange).toHaveBeenCalledTimes(4);
    expect(MissionUtils.Random.pickNumberInRange).toHaveBeenCalledWith(0, 9);
  });

  test('난수 ≥4이면 이동, <4이면 정지', () => {
    MissionUtils.Random.pickNumberInRange
      .mockReturnValueOnce(3) 
      .mockReturnValueOnce(4); 

    const game = new Racing();
    const onRound = jest.fn();

    const { winners } = game.start(['a', 'b'], 1, onRound);

    expect(onRound).toHaveBeenCalledTimes(1);
    const [, snapshot] = onRound.mock.calls[0]; 
    expect(snapshot).toEqual([
      { carName: 'a', position: 0 },
      { carName: 'b', position: 1 },
    ]);

    expect(winners).toEqual(['b']);
  });


});
