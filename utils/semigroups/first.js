const First =
x => ({
  x,
  concat:
    () => First(x),
  inspect:
    () => `First(${x})`,
});

module.exports = {
  First,
};
