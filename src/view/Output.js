import { MissionUtils } from '@woowacourse/mission-utils';

export const Output = {
  printRound(roundShot) {
    roundShot.forEach(({ name, position }) => {
      MissionUtils.Console.print(`${name} : ${'-'.repeat(position)}`);
    });
    MissionUtils.Console.print('');
  },
  printWinners(names) {
    MissionUtils.Console.print(`최종 우승자 : ${names.join(', ')}`);
  },
};
