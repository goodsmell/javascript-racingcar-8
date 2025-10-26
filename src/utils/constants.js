export const DELIMITER = ',';

export const MESSAGE = {
  ASK_CAR_NAMES: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분).',
  ASK_TRY_COUNT: '시도할 횟수는 몇 회인가요?',
  RESULT_TITLE: '실행결과 :',
};

export const ERROR_PREFIX = '[ERROR]';

export const CAR_NAME_ERRORS = {
  EMPTY: '자동차가 등록되지 않았습니댜. 한 개 이상의 자동차를 등록해주세요.',
  DUPLICATE: '중복된 자동차가 등록되었습니다.',
  EMPTY_TOKEN: '빈 이름이 존재합니다.',
  NAME_TOO_LONG: '자동차 이름이 5자를 초과하였습니다.',
  TOO_MANY_INPUTS: '너무 많은 자동차가 등록되었습니다.',
};
export const TRY_COUNT_ERRORS = {
  EMPTY: '시도 횟수가 입력되지 않았습니다.',
  NOT_POSITIVE_INT: '1 이상의 정수를 입력해 주세요',
  TOO_MANY_TRY: `너무 많은 시도는 할 수 없습니다.`,
};
