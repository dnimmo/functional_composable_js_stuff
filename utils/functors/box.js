const Box =
x => ({
  map: f => Box(f(x)),
  inspect: () => `Box(${x})`,
  fold: f => f(x),
});

const LazyBox =
g => ({
  map: f => LazyBox(() => f(g())),
  fold: f => f(g()),
});

module.exports = {
  Box,
  LazyBox,
};

