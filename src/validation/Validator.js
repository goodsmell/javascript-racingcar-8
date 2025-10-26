import { CAR_NAME_ERRORS, TRY_COUNT_ERRORS } from '../utils/constants.js';

export const Validator = {
  // ---------------- [Car Names] ----------------
  validateEmptyCarNames: (carArr) => {
    if (!carArr) throw new Error(CAR_NAME_ERRORS.EMPTY);
    if (carArr.includes('')) throw new Error(CAR_NAME_ERRORS.EMPTY_TOKEN);
  },

  validateDuplicateCarNames: (carArr) => {
    const uniqueCarNames = new Set(carArr);
    if (uniqueCarNames.size !== carArr.length) throw new Error(CAR_NAME_ERRORS.DUPLICATE);
  },

  validateCarNameLength: (carArr) => {
    if (carArr.some((char) => char.length > 5)) throw new Error(CAR_NAME_ERRORS.NAME_TOO_LONG);
  },

  validateAllCarNames: (carArr) => {
    Validator.validateEmptyCarNames(carArr);
    Validator.validateDuplicateCarNames(carArr);
    Validator.validateCarNameLength(carArr);
  },

  // ---------------- [Try Count] ----------------
  
};
