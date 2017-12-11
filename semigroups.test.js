const {
  Sum,
  All,
  First,
} = require('./semigroups');

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

describe('First', () => {
  it(
    'should only ever keep hold of the first thing passed to it',
    () =>
      expect(First('chorizo')
        .concat('Cumberland')
        .concat('chipolata')
        .x)
        .toBe('chorizo'),
  );
});
