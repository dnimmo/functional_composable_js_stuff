const { Box } = require('../utils/functors/box');

const nextCharForNumberString =
  str =>
    Box(str.trim())
      .map(trimmed => Number(trimmed))
      .map(number => number + 1)
      .fold(nextNumber => String.fromCharCode(nextNumber));

describe('nextCharFromNumberString', () => {
  it(
    'should return the next character from a string containing a number',
    () =>
      expect(nextCharForNumberString(' 64 '))
        .toBe('A'),
  );
});

