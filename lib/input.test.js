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

describe('parser test', () => {
  it('will parse terminal input data', () => {
    const argv = ['--add', 'My cool note'];
    const parsedData = parser(argv);

    expect(parsedData).toMatchObject({
      type: 'add',
      payload: 'My cool note'
    });
  });
});
