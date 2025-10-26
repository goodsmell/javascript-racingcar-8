import { DELIMITER } from './utils/constants';

export const extractCarNames = (input) => {
  const removeSpace = input.replace(/(\s*)/g, '');
  return removeSpace.split(DELIMITER);
};
