const All =
  x => ({
    x,
    concat:
      ({ x: y }) => All(x && y),
    inspect:
      () => `All(${x})`,
  });

All.empty = () => All(true);

const all =
  xs => xs.reduce((acc, current) => acc && current, true);

module.exports = {
  All,
  all,
};
