const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Interview', interviewSchema);
