const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Notes', schema);
