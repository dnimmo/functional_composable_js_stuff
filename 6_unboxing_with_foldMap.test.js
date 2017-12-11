const { List } = require('immutable-ext');
const { Sum } = require('./monoids');

describe('foldMap example', () => {
  it(
    'should be able to get a result from a series of sums',
    () => {
      const { x: value } =
        List.of(1, 2, 3, 4)
          .foldMap(Sum, Sum.empty());

      expect(value)
        .toBe(10);
    },
  );
});
