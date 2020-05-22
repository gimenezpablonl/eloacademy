const mongoose = require('mongoose')
const { Schema } = mongoose

const Player = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
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
  server: {
    type: String,
    required: true,
  },
  queue: {
    type: String,
  },
  service: {
    type: String,
  },
  boost: {
    type: String,
  },
  lpGains: {
    type: String,
  },
  desiredLeague: {
    type: String,
  },
  desiredDivision: {
    type: String,
  },
  wins: {
    type: Number,
  },
  options: {
    quickService: {
      type: Boolean,
      default: false,
    },
    streaming: {
      type: Boolean,
      default: false,
    },
    hiddenChat: {
      type: Boolean,
      default: false,
    },
    role: {
      type: [String],
      default: [''],
    },
    champions: {
      type: [Number],
      default: [],
    },
  },
  createdAt: {
    type: Date,
  },
})

Player.pre('save', function () {
  this.createdAt(Date.now)
})
module.exports = mongoose.model('Players', Player)
