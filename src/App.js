import { Input } from './view/Input.js';
import { extractCarNames } from './parser.js';
import { Validator } from './validation/Validator.js';

class App {
  async run() {
    const carNamesInput = await Input.askCarNames();
    const parseCarName = extractCarNames(carNamesInput);
    Validator.validateAllCarNames(parseCarName);

    const tryCountInput = await Input.askTryCount();
    Validator.validateAllTryCount(tryCountInput);
  }
}

export default App;
