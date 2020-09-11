const mongoose = require('mongoose')
const { Schema } = mongoose

const Eloboost = new Schema({
  status: {
    type: Boolean,
    default: false,
  },
  booster: {
    type: Schema.ObjectId,
    ref: 'Users',
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
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
  server: {
    type: String,
    required: true,
  },
  queue: {
    type: Boolean, // 0 = solo queue, 1 = flex queue
  },
  boost: {
    type: Boolean, // 0 = eloboost, 1 = duoboost
  },
  lpGains: {
    type: String,
  },
  lp: {
    type: Number,
    default: 0,
  },
  desiredRank: {
    league: {
      type: String,
    },
    division: {
      type: String,
    },
  },
  desiredLp: {
    type: Number,
    default: 0,
  },
  wins: {
    type: Number,
    default: 0,
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

module.exports = mongoose.model('Eloboosts', Eloboost)
