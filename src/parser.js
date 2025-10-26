import { DELIMITER } from './utils/constants.js';

export const extractCarNames = (input) => {
  const removeSpace = input.replace(/(\s*)/g, '');
  if (removeSpace === '') return null;
  return removeSpace.split(DELIMITER);
};
