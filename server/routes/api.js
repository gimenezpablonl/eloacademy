/* eslint-disable camelcase */

const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../models/UserSchema')
const Account = require('../models/AccountSchema')
const Eloboost = require('../models/EloboostSchema')
const Coaching = require('../models/CoachingSchema')
const router = express.Router()

// AUTH

router.post('/auth/signup', async (req, res) => {
  const { username, password, admin } = req.body
  const user = new User({ username, password, admin })
  user.password = await user.encryptPassword(password)
  await user.save()
  res.redirect('/')
})

router.post('/auth/signin', function (req, res, next) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: info ? info.message : 'Login failed',
        user,
      })
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err)
      }
      const userToken = user.toJSON()
      delete userToken.password
      const token = jwt.sign(JSON.stringify(userToken), 'elo')
      return res.json({ userToken, token })
    })
  })(req, res)
})

router.get('/auth/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

// USERS

router.get('/users', async (req, res) => {
  const users = await User.find()
  res.json(users)
})

router.get('/usernames', async (req, res) => {
  const users = await User.find().select({ username: 1, _id: 0 })
  const usernames = []
  users.forEach((user) => {
    usernames.push(user.username)
  })
  res.json(usernames)
})

router.put('/users/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body)
  res.send('user updated')
})

router.delete('/users/:id', async (req, res) => {
  await User.findByIdAndRemove(req.params.id)
  res.send('user deleted')
})

router.post('/users', async (req, res) => {
  const { username, email, password, role } = req.body
  const user = new User({
    username,
    email,
    password,
    role,
  })
  user.password = await user.encryptPassword(password)
  await user.save()
  res.json({
    user,
  })
})

// GET BOOSTERS
router.get('/boosters', async (req, res) => {
  const boosters = await User.find({ role: { $gte: 1 } })
  res.json(boosters)
})

router.get('/coachs', async (req, res) => {
  const boosters = await User.find({ role: { $gte: 1 } })
  res.json(boosters)
})

router.get('/unassignedeloboosts', async (req, res) => {
  const unassignedbooster = await User.findOneAndUpdate(
    { username: 'Sin asignar' },
    { role: 1 },
    {
      new: true,
      upsert: true,
    }
  )
  const unassignedeloboosts = await Eloboost.find({
    booster: unassignedbooster._id,
  }).populate('booster')
  res.json(unassignedeloboosts)
})

router.get('/unassignedcoachings', async (req, res) => {
  const unassignedbooster = await User.findOneAndUpdate(
    { username: 'Sin asignar' },
    { role: 1 },
    {
      new: true,
      upsert: true,
    }
  )
  const unassignedcoachings = await Coaching.find({
    coach: unassignedbooster._id,
  }).populate('coach')
  res.json(unassignedcoachings)
})

router.get('/unassignedbooster', async (req, res) => {
  const unassignedbooster = await User.findOneAndUpdate(
    { username: 'Sin asignar' },
    { role: 1 },
    {
      new: true,
      upsert: true,
    }
  )
  res.json(unassignedbooster)
})

// GET ELOBOOSTS BY BOOSTER
router.get('/boosters/:id', async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    const eloboosts = await Eloboost.find({ booster: req.params.id }).populate(
      'booster'
    )
    res.json(eloboosts)
  }
})

// GET COACHINGS BY BOOSTER
router.get('/coachs/:id', async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    const coachings = await Coaching.find({ coach: req.params.id }).populate(
      'coach'
    )
    res.json(coachings)
  }
})

router.get('/usersdata/', async (req, res) => {
  const usersData = await User.find().lean()
  for (let i = 0; i < usersData.length; i++) {
    usersData[i].eloboosts = await Eloboost.find({ booster: usersData[i]._id })
    usersData[i].coachings = await Coaching.find({ coach: usersData[i]._id })
    usersData[i].accounts = await Account.find({ owner: usersData[i]._id })
  }
  res.send(usersData)
})

router.get('/userdata/:id', async (req, res) => {
  const userData = {}
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    userData.eloboosts = await Eloboost.find({ booster: req.params.id })
    userData.coachings = await Coaching.find({ coach: req.params.id })
    userData.accounts = await Account.find({ owner: req.params.id })
  }
  res.send(userData)
})

// ACCOUNTS

router.get('/accounts', async (req, res) => {
  const accounts = await Account.find().populate('owner', 'username')
  res.send(accounts)
})
router.get('/accountsverified', async (req, res) => {
  const accounts = await Account.find({ status: 2 })
  res.send(accounts)
})

router.put('/accounts/:id', async (req, res) => {
  await Account.findByIdAndUpdate(req.params.id, req.body)
  res.send('account updated')
})

router.delete('/accounts/:id', async (req, res) => {
  await Account.findByIdAndRemove(req.params.id)
  res.send('account deleted')
})

router.post('/accounts', async (req, res) => {
  const {
    owner,
    username,
    password,
    summoner_name,
    email,
    server,
    level,
    blue_essence,
    orange_essence,
    rp,
    champions,
    skins,
    icons,
    previous_rank,
    solo_rank,
    flex_rank,
    tft_rank,
    price,
  } = req.body
  const account = new Account({
    owner,
    username,
    password,
    summoner_name,
    email,
    server,
    level,
    blue_essence,
    orange_essence,
    rp,
    champions,
    skins,
    icons,
    previous_rank,
    solo_rank,
    flex_rank,
    tft_rank,
    price,
  })
  await account.save()
  res.json({
    account,
  })
})

router.get('/accounts/:id', async (req, res) => {
  const id = req.params.id
  await Account.findOne({ _id: id }, function (err, account) {
    if (err) {
    }
    res.json({
      account,
    })
  })
})

// ELOBOOSTS

router.get('/eloboosts', async (req, res) => {
  const eloboosts = await Eloboost.find().populate('booster', 'username')
  res.send(eloboosts)
})

router.post('/eloboosts', async (req, res) => {
  const {
    username,
    password,
    rank,
    booster,
    server,
    queue,
    boost,
    lpGains,
    lp,
    desiredLp,
    desiredRank,
    wins,
    role,
    champions,
  } = req.body
  const eloboost = new Eloboost({
    username,
    password,
    rank,
    booster,
    server,
    queue,
    boost,
    lpGains,
    lp,
    desiredLp,
    desiredRank,
    wins,
    role,
    champions,
  })
  await eloboost.save()
  res.json({
    eloboost,
  })
})

router.put('/eloboosts/:id', async (req, res) => {
  await Eloboost.findByIdAndUpdate(req.params.id, req.body)
  res.send(req.body)
})

router.delete('/eloboosts/:id', async (req, res) => {
  await Eloboost.findByIdAndRemove(req.params.id)
  res.send('Eloboosts deleted')
})

// GET Eloboosts by ID
router.post('/eloboosts', async (req, res) => {
  const eloboosts = await Eloboost.find()
  res.json({
    eloboosts,
  })
})

// Coachings

router.get('/coachings', async (req, res) => {
  const coachings = await Coaching.find().populate('coach', 'username')
  res.send(coachings)
})

router.post('/coachings', async (req, res) => {
  const { rank, contact, coach, role, champions } = req.body
  const coaching = new Coaching({
    rank,
    contact,
    coach,
    role,
    champions,
  })
  await coaching.save()
  res.json({
    coaching,
  })
})

router.put('/coachings/:id', async (req, res) => {
  await Coaching.findByIdAndUpdate(req.params.id, req.body)
  res.send('coaching edited')
})

router.delete('/coachings/:id', async (req, res) => {
  await Coaching.findByIdAndRemove(req.params.id)
  res.send('coachings deleted')
})

router.get('/alldata', async (req, res) => {
  const data = {}
  data.eloboosts = await Eloboost.find()
  data.coachings = await Coaching.find()
  data.users = await User.find()
  data.accounts = await Account.find()
  res.send(data)
})

module.exports = router
