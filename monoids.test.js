const {
  sum,
  all,
} = require('./monoids');

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
