/* eslint-disable camelcase */

const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const User = require('../models/UserSchema')
const Account = require('../models/AccountSchema')
const Eloboost = require('../models/PlayerSchema')
const router = express.Router()

// AUTH

router.get('/users', async (req, res) => {
  const users = await User.find()
  res.json(users)
})

router.delete('/users/:id', async (req, res) => {
  await User.findByIdAndRemove(req.params.id)
  res.json('borrado')
})

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

// ACCOUNTS

router.get('/accounts', async (req, res) => {
  const accounts = await Account.find()
  res.send(accounts)
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

router.delete('/accounts/:id', async (req, res) => {
  await Account.findByIdAndRemove(req.params.id)
  res.json('borrado')
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
  const eloboosts = await Eloboost.find()
  res.send(eloboosts)
})

router.post('/eloboosts', async (req, res) => {
  const {
    username,
    password,
    email,
    phone,
    rank,
    server,
    queue,
    service,
    boost,
    lpGains,
    desiredLeague,
    desiredDivision,
    wins,
    options,
  } = req.body
  const eloboost = new Eloboost({
    username,
    password,
    email,
    phone,
    rank,
    server,
    queue,
    service,
    boost,
    lpGains,
    desiredLeague,
    desiredDivision,
    wins,
    options,
  })
  await eloboost.save()
  res.json({
    eloboost,
  })
})

module.exports = router
