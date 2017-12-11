const Task = require('data.task');
const fs = require('fs');

const readFile =
  (filename, encoding) =>
    new Task((handleError, handleSuccess) =>
      fs.readFile(filename, encoding, (err, contents) =>
        (err
          ? handleError(err)
          : handleSuccess(contents))));

const writeFile =
  (filename, contents) =>
    new Task((handleError, handleSuccess) =>
      fs.writeFile(filename, contents, (err, success) =>
        (err
          ? handleError(err)
          : handleSuccess(success))));

const app =
  filename =>
    readFile(filename, 'utf-8')
      .map(contents => contents.replace(/8/g, '6'))
      .chain(contents => writeFile('updated_config.json', contents));

describe('async functions with Task', () => {
  it(
    'should handle the read and write of a file correctly',
    () => {
      app('config.json')
        .fork(
          () => {},
          () => {},
        );
      console.log('I can not figure out how to write this test at the moment :/');
    },
  );
});

