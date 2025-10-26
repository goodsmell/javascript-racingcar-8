// validation/__tests__/Validator.spec.js
import { Validator } from '../src/validation/Validator.js';
import { CAR_NAME_ERRORS, TRY_COUNT_ERRORS } from '../src/utils/constants.js';

describe('자동차 이름 검증', () => {
  const invalidCases = [
    ['빈 입력', null, CAR_NAME_ERRORS.EMPTY],
    ['이름 중복', ['pobi', 'pobi'], CAR_NAME_ERRORS.DUPLICATE],
    ['빈 토큰(쉼표 연속)', ['a', '', 'b'], CAR_NAME_ERRORS.EMPTY_TOKEN],
    ['이름 6자 초과', ['foobar'], CAR_NAME_ERRORS.NAME_TOO_LONG],
  ];

  test.each(invalidCases)('%s → 예외 발생', (_, input, expectedError) => {
    expect(() => Validator.validateAllCarNames(input)).toThrow(expectedError);
  });

  const validCases = [['정상 입력(두 명)', ['pobi', 'woni']]];

  test.each(validCases)('%s → 통과', (_, input) => {
    expect(() => Validator.validateAllCarNames(input)).not.toThrow();
  });
});

describe('시도 횟수 입력 검증', () => {
  const invalidCases = [
    ['0 입력', '0', TRY_COUNT_ERRORS.NOT_POSITIVE_INT],
    ['음수 입력', '-1', TRY_COUNT_ERRORS.NOT_POSITIVE_INT],
    ['소수 입력', '1.5', TRY_COUNT_ERRORS.NOT_POSITIVE_INT],
    ['문자 입력', 'abc', TRY_COUNT_ERRORS.NOT_POSITIVE_INT],
    ['빈 문자열', '', TRY_COUNT_ERRORS.EMPTY],
    ['공백만 입력', '   ', TRY_COUNT_ERRORS.EMPTY],
  ];

  test.each(invalidCases)('%s → 예외 발생', (_, input, expectedError) => {
    expect(() => Validator.validateAllTryCount(input)).toThrow(expectedError);
  });

  const validCases = [
    ['1 입력', '1'],
    ['12 입력', '12'],
  ];

  test.each(validCases)('%s → 통과', (_, input) => {
    expect(() => Validator.validateAllTryCount(input)).not.toThrow();
  });
});
