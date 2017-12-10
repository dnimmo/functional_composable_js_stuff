const Box =
  x => ({
    map: f => Box(f(x)),
    inspect: () => `Box(${x})`,
    fold: f => f(x),
  });

const Right =
  x => ({
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inspect: () => `Right(${x})`,
  });

const Left =
  x => ({
    map: () => Left(x),
    fold: f => f(x),
    inspect: () => `Left(${x})`,
  });

const fromNullable =
  x =>
    (x !== null && x !== undefined
      ? Right(x)
      : Left(null));

// eslint-disable-next-line
module.exports = {
  Box,
  fromNullable,
};

