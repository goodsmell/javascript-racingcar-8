import { parseCarNames } from '../src/parser';

describe('자동차 이름 분석', () => {
  const cases = [
    ['빈 문자열', '', ['']],
    ['공백만', '   ', ['']],
    ['단일 토큰', 'pobi', ['pobi']],
    ['앞뒤 공백 포함 단일 토큰', '  pobi  ', ['pobi']],
    ['두 토큰 기본', 'pobi,woni', ['pobi', 'woni']],
    ['토큰 사이 공백', '  pobi ,   woni  ', ['pobi', 'woni']],
    ['연속 쉼표(빈 토큰 유지)', 'a,,b', ['a', '', 'b']],
    ['토큰 사이 공백-빈 토큰', 'a, ,b', ['a', '', 'b']],
    ['앞 쉼표(선행 빈 토큰)', ',a', ['', 'a']],
    ['뒤 쉼표(후행 빈 토큰)', 'a,', ['a', '']],
    ['여러 개 토큰 + 다양한 공백', '  a , b  ,  c ', ['a', 'b', 'c']],
  ];

  test.each(cases)('%s → %j', (_, input, expected) => {
    const result = parseCarNames(input);
    expect(result).toEqual(expected);
  });
});
