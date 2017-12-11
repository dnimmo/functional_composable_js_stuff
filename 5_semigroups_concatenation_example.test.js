const { Map } = require('immutable-ext');
const {
  Sum,
  All,
  First,
} = require('./semigroups');

describe('concatenating two objects with Map', () => {
  it(
    'should correctly create a new object from two concatenated objects',
    () => {
      const account1 = Map({
        name: First('Nimmo'),
        isPaid: All(true),
        points: Sum(100),
        friends: ['Dante'],
      });

      const account2 = Map({
        name: First('Nimmo'),
        isPaid: All(false),
        points: Sum(10),
        friends: ['Juri'],
      });

      const expected = {
        name: First('Nimmo'),
        isPaid: All(false),
        points: Sum(110),
        friends: ['Dante', 'Juri'],
      };

      const result =
        account1
          .concat(account2)
          .toJS();

      expect(JSON.stringify(result))
        .toEqual(JSON.stringify(expected));
    },
  );
});
