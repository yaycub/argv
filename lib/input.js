const minimist = require('minimist');

const validator = argv => {
  const minimized = minimist(argv);
  if(!minimized.add) return false;

  return true;
};

const parser = argObj => ({
  type: 'add',
  payload: argObj.add
});

module.exports = {
  validator,
  parser
};
