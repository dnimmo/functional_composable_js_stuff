const Box =
  x => ({
    map: f => Box(f(x)),
    inspect: () => `Box(${x})`,
    fold: f => f(x),
  });

const nextCharForNumberString =
  str =>
    Box(str.trim())
      .map(trimmed => Number(trimmed))
      .map(number => number + 1)
      .fold(nextNumber => String.fromCharCode(nextNumber));

console.log(nextCharForNumberString(' 64 ')); // 'A'
