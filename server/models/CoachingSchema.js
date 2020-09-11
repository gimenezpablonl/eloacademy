const mongoose = require('mongoose')
const { Schema } = mongoose

const Coaching = new Schema({
  status: {
    type: Boolean,
    default: false,
  },
  coach: {
    type: Schema.ObjectId,
    ref: 'Users',
  },
  contact: {
    type: String,
  },
  rank: {
    league: {
      type: String,
      required: true,
    },
    division: {
      type: String,
    },
  },
  role: {
    type: [String],
    default: [''],
  },
  champions: {
    type: [Number],
    default: [],
  },
  createdAt: {
    type: Date,
  },
})

module.exports = mongoose.model('Coachings', Coaching)
