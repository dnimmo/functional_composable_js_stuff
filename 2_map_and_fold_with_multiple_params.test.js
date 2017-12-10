const { Box } = require('./utils');


const moneyToFloat =
  str =>
    Box(str.replace(/£/g, ''))
      .map(replaced => parseFloat(replaced));


const percentToFloat =
  str =>
    Box(str.replace(/%/g, ''))
      .map(replaced => parseFloat(replaced))
      .map(number => number * 0.01);


const applyDiscount =
  (price, discount) =>
    moneyToFloat(price)
      .fold(cost =>
        percentToFloat(discount)
          .fold(savings => cost - (cost * savings)));


describe('applyDiscount', () => {
  it(
    'should apply a given discount percentage to a given total',
    () =>
      expect(applyDiscount('£100', '10%'))
        .toBe(90),
  );
});

