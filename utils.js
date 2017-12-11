const Box =
  x => ({
    map: f => Box(f(x)),
    inspect: () => `Box(${x})`,
    fold: f => f(x),
  });

const Right =
  x => ({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inspect: () => `Right(${x})`,
  });

const Left =
  x => ({
    chain: () => Left(x),
    map: () => Left(x),
    fold: f => f(x),
    inspect: () => `Left(${x})`,
  });

const fromNullable =
  x =>
    (x !== null && x !== undefined
      ? Right(x)
      : Left(null));

const tryCatch =
  (f) => {
    try {
      return (Right(f()));
    } catch (e) {
      return Left(e);
    }
  };

const returnValue =
  x => x;

// eslint-disable-next-line
module.exports = {
  Box,
  fromNullable,
  tryCatch,
  returnValue,
};

