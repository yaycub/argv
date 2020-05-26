const { validator, parser } = require('./input');

describe('validator test', () => {
  it('will return true with valid input', () => {
    const argv = ['--add', 'My cool note'];
    const isValid = validator(argv);

    expect(isValid).toBeTruthy();
  });

  it('will return false with invalid input', () => {
    const argv = ['--note', 'My cool note'];
    const isValid = validator(argv);

    expect(isValid).toBeFalsy();
  });
});
