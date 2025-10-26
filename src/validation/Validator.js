import { CAR_NAME_ERRORS, TRY_COUNT_ERRORS, ERROR_PREFIX } from '../utils/constants.js';

const MAX_TRY_COUNT = 1000;

export const Validator = {
  // ---------------- [Car Names] ----------------
  validateAllCarNames: (carArr) => {
    Validator.validateEmptyCarNames(carArr);
    Validator.validateDuplicateCarNames(carArr);
    Validator.validateCarNameLength(carArr);
  },

  validateEmptyCarNames: (carArr) => {
    if (!carArr) throw new Error(ERROR_PREFIX + CAR_NAME_ERRORS.EMPTY);
    if (carArr.includes('')) throw new Error(ERROR_PREFIX + CAR_NAME_ERRORS.EMPTY_TOKEN);
  },

  validateDuplicateCarNames: (carArr) => {
    const uniqueCarNames = new Set(carArr);
    if (uniqueCarNames.size !== carArr.length)
      throw new Error(ERROR_PREFIX + CAR_NAME_ERRORS.DUPLICATE);
  },

  validateCarNameLength: (carArr) => {
    if (carArr.some((name) => name.length > 5))
      throw new Error(ERROR_PREFIX + CAR_NAME_ERRORS.NAME_TOO_LONG);
  },

  // ---------------- [Try Count] ----------------

  validateAllTryCount: (rawTryCount) => {
    const tryCount = String(rawTryCount).trim();
    if (!tryCount) throw new Error(ERROR_PREFIX + TRY_COUNT_ERRORS.EMPTY);
    if (!/^[1-9]\d*$/.test(tryCount))
      throw new Error(ERROR_PREFIX + TRY_COUNT_ERRORS.NOT_POSITIVE_INT);
    const n = Number(tryCount);
    if (!Number.isSafeInteger(n) || n > MAX_TRY_COUNT) {
      throw new Error(ERROR_PREFIX + TRY_COUNT_ERRORS.TOO_MANY_TRY);
    }
  },
};
