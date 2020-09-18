const mongoose = require('mongoose')
const { Schema } = mongoose
const Account = new Schema({
  owner: {
    type: Schema.ObjectId,
    ref: 'Users',
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  server: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  blue_essence: {
    type: Number,
    default: 0,
  },
  orange_essence: {
    type: Number,
    default: 0,
  },
  rp: {
    type: Number,
    default: 0,
  },
  champions: [Number],
  skins: [Number],
  icons: {
    type: Number,
    default: 0,
  },
  previous_rank: {
    league: {
      type: String,
      required: true,
    },
    division: {
      type: String,
    },
  },
  solo_rank: {
    league: {
      type: String,
      required: true,
    },
    division: {
      type: String,
    },
  },
  flex_rank: {
    league: {
      type: String,
      required: true,
    },
    division: {
      type: String,
    },
  },
  tft_rank: {
    league: {
      type: String,
      required: true,
    },
    division: {
      type: String,
    },
  },
  status: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
    default: 0,
  },
})
module.exports = mongoose.model('Accounts', Account)
