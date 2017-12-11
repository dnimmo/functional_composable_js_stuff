const { LazyBox } = require('../utils/functors/box');

describe('delaying evaluation with LazyBox', () => {
  it(
    'should not trigger an evaluation before `fold`',
    () => {
      const result =
        LazyBox(() => ' 64 ')
          .map(str => str.trim())
          .map(trimmed => Number(trimmed))
          .map(number => number + 1)
          .map(x => String.fromCharCode(x));

      expect(result)
        .not.toBe('a');
    },
  );

  it(
    'should be able to map a number of values and return a result',
    () => {
      const result =
        LazyBox(() => ' 64 ')
          .map(str => str.trim())
          .map(trimmed => Number(trimmed))
          .map(number => number + 1)
          .map(x => String.fromCharCode(x))
          .fold(x => x.toLowerCase());

      expect(result)
        .toBe('a');
    },
  );
});

