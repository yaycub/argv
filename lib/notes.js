const Note = require('./models/Notes');

const execute = dataObj => {
  switch(dataObj.type){
    case 'add':
      return Note.create({ text: dataObj.payload });
    default:
      console.log('invalid action, please try again');
  }
};

module.exports = execute;
