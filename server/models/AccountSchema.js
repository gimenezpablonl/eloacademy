const mongoose = require('mongoose')
const { Schema } = mongoose
const Users = mongoose.model('Users')
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
    type: Number,
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
  icons: [Number],
  previous_rank_league: {
    type: String,
    required: true,
  },
  previous_rank_division: {
    type: String,
    min: 0,
    max: 4,
  },
  solo_rank_league: {
    type: String,
    required: true,
  },
  solo_rank_division: {
    type: String,
    min: 0,
    max: 4,
  },
  flex_rank_league: {
    type: String,
    required: true,
  },
  flex_rank_division: {
    type: String,
    min: 0,
    max: 4,
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
