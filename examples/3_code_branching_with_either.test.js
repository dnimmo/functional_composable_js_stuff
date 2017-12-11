const { fromNullable } = require('../utils/functors/either');


const findColour =
  name =>
    fromNullable({
      red: '#ff444',
      blue: '#3b5998',
      yellow: '#fff68f',
    }[name]);


describe('findColour', () => {
  it(
    'should be able to return a hex code for a recorded colour',
    () =>
      expect(findColour('yellow')
        .fold(
          () => {},
          x => x,
        ))
        .toBe('#fff68f'),
  );

  it(
    'should return null if no hex code is found',
    () =>
      expect(findColour('chorizo')
        .fold(
          x => x,
          () => {},
        ))
        .toBe(null),
  );

  it(
    'should allow chained "maps" if a hex code is found',
    () =>
      expect(findColour('yellow')
        .map(x => x.slice(1))
        .map(x => x.toUpperCase())
        .fold(
          () => {},
          x => x,
        ))
        .toBe('FFF68F'),
  );

  it(
    'should ignore chained "maps" if a hex code is not found',
    () =>
      expect(findColour('chorizo')
        .map(x => x.slice(1))
        .map(x => x.toUpperCase())
        .fold(
          () => 'no colour found',
          () => {},
        ))
        .toBe('no colour found'),
  );
});

