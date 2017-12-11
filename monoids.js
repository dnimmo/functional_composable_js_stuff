const Sum =
x => ({
  x,
  concat:
    ({ x: y }) => Sum(x + y),
  inspect:
    () => `Sum(${x})`,
});

Sum.empty = () => Sum(0);

const All =
x => ({
  x,
  concat:
    ({ x: y }) => All(x && y),
  inspect:
    () => `All(${x})`,
});

All.empty = () => All(true);

const sum =
  xs => xs.reduce((acc, current) => acc + current, 0);

const all =
  xs => xs.reduce((acc, current) => acc && current, true);


module.exports = {
  Sum,
  All,
  sum,
  all,
};
