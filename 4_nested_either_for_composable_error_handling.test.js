const fs = require('fs');
const {
  tryCatch,
  returnValue,
} = require('./utils');

const returnDefaultPort =
  () => 3000;

const getPort =
  (configFileLocation = 'config.json') =>
    tryCatch(() => fs.readFileSync(configFileLocation))
      .chain(x => tryCatch(() => JSON.parse(x)))
      .chain(({ port }) => tryCatch(() => port))
      .fold(
        returnDefaultPort,
        returnValue,
      );

describe('', () => {
  it(
    'should return the port from a given config file',
    () =>
      expect(getPort('config.json'))
        .toBe(8888),
  );

  it(
    'should return a default port if the config file requested does not exist',
    () =>
      expect(getPort('chorizos.json'))
        .toBe(3000),
  );

  it(
    'should return a default port if the config file requested does exist, but has an error',
    () =>
      expect(getPort('intentionally_broken_config.json'))
        .toBe(3000),
  );
});

