import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../utils/constants.js';

export const Output = {
  printHeader() {
    MissionUtils.Console.print('');
    MissionUtils.Console.print(MESSAGE.START_ROUND);
  },
  printRound(roundShot) {
    roundShot.forEach(({ name, position }) => {
      MissionUtils.Console.print(`${name} : ${'-'.repeat(position)}`);
    });
    MissionUtils.Console.print('');
  },
  printWinners(names) {
    MissionUtils.Console.print('');
    MissionUtils.Console.print(MESSAGE.ANNOUNCE_WINNER + names.join(', '));
  },
};
