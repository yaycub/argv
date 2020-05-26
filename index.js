require('dotenv').config();
require('./lib/utils/connect')();

const { parser, validator } = require('./lib/input');
const execute = require('./lib/notes');

const argv = process.argv.slice(2);

if(validator(argv)){
  const action = parser(argv);
  execute(action)
    .then(newNote => console.log('note added:', {
      note: newNote.text,
      id: newNote._id
    }));
} else {
  console.log('invalid action');
}
