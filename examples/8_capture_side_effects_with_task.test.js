const Task = require('data.task');

const fryChorizos =
  () => new Task((rejection, result) => {
    console.log('frying the chorizos');
    result('fried chorizo');
  });

const app =
  fryChorizos().map(x => `${x}!`);

describe('capturing side effects with Task', () => {
  it(
    'should manage the side effect',
    () => {
      let sideEffectValue;
      app.fork(
        (e) => { sideEffectValue = `Error: ${e}`; },
        (x) => { sideEffectValue = `Result: ${x}`; },
      );

      expect(sideEffectValue)
        .toBe('Result: fried chorizo!');
    },
  );
});

