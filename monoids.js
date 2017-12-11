const sum =
  xs => xs.reduce((acc, current) => acc + current, 0);

const all =
  xs => xs.reduce((acc, current) => acc && current, true);

// eslint-disable-next-line
module.exports = {
  sum,
  all,
};
