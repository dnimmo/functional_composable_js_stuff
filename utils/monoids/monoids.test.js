const {
  sum,
  Sum,
} = require('./sum');

const {
  all,
  All,
} = require('./all');

describe('Sum', () => {
  it(
    'should be able to sum up given numbers',
    () =>
      expect(Sum(1)
        .concat(Sum(2))
        .concat(Sum(3))
        .x)
        .toBe(6),
  );
});

describe('All', () => {
  it(
    'should be able to recognise when all given values are true',
    () =>
      expect(All(true)
        .concat(All(true))
        .concat(All(true))
        .x)
        .toBe(true),
  );

  it(
    'should be able to recognise when not all given values are true',
    () =>
      expect(All(true)
        .concat(All(true))
        .concat(All(false))
        .x)
        .toBe(false),
  );
});

describe('sum', () => {
  it(
    'should be able to sum up any given numbers',
    () =>
      expect(sum([1, 2, 3, 4]))
        .toBe(10),
  );
});

describe('all', () => {
  it(
    'should be able to determine if all given values are true',
    () =>
      expect(all([true, true, true]))
        .toBe(true),
  );

  it(
    'should be able to determine if not all given values are true',
    () =>
      expect(all([false, true, true]))
        .toBe(false),
  );
});
