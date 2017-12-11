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
  First,
};
