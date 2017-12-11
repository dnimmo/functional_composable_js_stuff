const Sum =
  x => ({
    x,
    concat:
      ({ x: y }) => Sum(x + y),
    inspect:
      () => `Sum(${x})`,
  });

Sum.empty = () => Sum(0);

const sum =
  xs => xs.reduce((acc, current) => acc + current, 0);

module.exports = {
  Sum,
  sum,
};
