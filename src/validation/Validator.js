import { CAR_NAME_ERRORS, TRY_COUNT_ERRORS, ERROR_PREFIX } from '../utils/constants.js';

const MAX_TRY_COUNT = 1000;

const VError = (msg) => new Error(ERROR_PREFIX + msg);

export const Validator = {
  validateAllCarNames: (carArr) => {
    _ensureArrayNotEmpty(carArr);
    _ensureNoEmptyToken(carArr);
    _ensureNameLengthWithin(carArr, 5);
    _ensureNoDuplicate(carArr);
  },

  validateAllTryCount: (rawTryCount) => {
    const tryCount = String(rawTryCount).trim();
    _ensureNotBlank(tryCount);
    _ensurePositiveIntFormat(tryCount);
    _ensureTryCountRange(tryCount, MAX_TRY_COUNT);
  },
};

function _ensureArrayNotEmpty(carArr) {
  if (!Array.isArray(carArr) || carArr.length === 0) {
    throw VError(CAR_NAME_ERRORS.EMPTY);
  }
}
function _ensureNoEmptyToken(carArr) {
  if (carArr.includes('')) {
    throw VError(CAR_NAME_ERRORS.EMPTY_TOKEN);
  }
}

function _ensureNameLengthWithin(carArr, max) {
  if (carArr.some((name) => name.length > max)) {
    throw VError(CAR_NAME_ERRORS.NAME_TOO_LONG);
  }
}
function _ensureNoDuplicate(carArr) {
  if (new Set(carArr).size !== carArr.length) {
    throw VError(CAR_NAME_ERRORS.DUPLICATE);
  }
}

function _ensureNotBlank(s) {
  if (!s) throw VError(TRY_COUNT_ERRORS.EMPTY);
}

function _ensurePositiveIntFormat(s) {
  if (!/^[1-9]\d*$/.test(s)) {
    throw VError(TRY_COUNT_ERRORS.NOT_POSITIVE_INT);
  }
}
function _ensureTryCountRange(s, max) {
  const n = Number(s);
  if (!Number.isSafeInteger(n) || n <= 0) throw VError(TRY_COUNT_ERRORS.NOT_POSITIVE_INT);
  if (n > max) throw VError(TRY_COUNT_ERRORS.TOO_MANY_TRY);
}
