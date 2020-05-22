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
  summoner_name: {
    type: String,
    required: true,
  },
  email: {
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
  skins: [
    {
      _id: false,
      champion: {
        type: Number,
        required: true,
      },
      key: {
        type: Number,
        required: true,
      },
    },
  ],
  icons: [Number],
  previous_rank: {
    league: {
      type: String,
      required: true,
    },
    division: {
      type: Number,
      min: 1,
      max: 4,
    },
  },
  solo_rank: {
    league: {
      type: String,
      required: true,
    },
    division: {
      type: Number,
      min: 1,
      max: 4,
    },
  },
  flex_rank: {
    league: {
      type: String,
      required: true,
    },
    division: {
      type: Number,
      min: 1,
      max: 4,
    },
  },
  tft_rank: {
    league: {
      type: String,
      required: true,
    },
    division: {
      type: Number,
      min: 1,
      max: 4,
    },
  },
  status: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    default: 0,
  },
})
module.exports = mongoose.model('Accounts', Account)
