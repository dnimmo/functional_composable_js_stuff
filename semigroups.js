const Sum =
x => ({
  x,
  concat:
    ({ x: y }) => Sum(x + y),
  inspect:
    () => `Sum(${x})`,
});

const All =
x => ({
  x,
  concat:
    ({ x: y }) => All(x && y),
  inspect:
    () => `All(${x})`,
});

const First =
x => ({
  x,
  concat:
    () => First(x),
  inspect:
    () => `First(${x})`,
});

// eslint-disable-next-line
module.exports = {
  Sum,
  All,
  First,
};
