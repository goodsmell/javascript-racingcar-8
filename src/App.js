import { Input } from './view/Input.js';
import { Output } from './view/Output.js';
import { extractCarNames } from './parser.js';
import { Validator } from './validation/Validator.js';
import { Racing } from './service/Racing.js';

class App {
  async run() {
    const carNamesInput = await Input.askCarNames();
    const parseCarName = extractCarNames(carNamesInput);
    Validator.validateAllCarNames(parseCarName);

    const tryCountInput = await Input.askTryCount();
    Validator.validateAllTryCount(tryCountInput);

    const racing = new Racing();
    const { winners } = racing.start(parseCarName, tryCountInput, (shot) =>
      Output.printRound(shot),
    );

    Output.printWinners(winners);
  }
}

export default App;
