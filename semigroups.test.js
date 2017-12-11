const {
  First,
} = require('./semigroups');

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
