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


});
