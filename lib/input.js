const minimist = require('minimist');

const validator = argV => {
  const argObj = minimist(argV);
  if(!argObj.add) return false;

  return true;
};

const parser = argV => {
  const argObj = minimist(argV);
  return {
    type: 'add',
    payload: argObj.add
  };
};

module.exports = {
  validator,
  parser
};
