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
      return Right(f());
    } catch (e) {
      return Left(e);
    }
  };

module.exports = {
  Right,
  Left,
  fromNullable,
  tryCatch,
};

