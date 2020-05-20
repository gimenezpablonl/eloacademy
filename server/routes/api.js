/* eslint-disable camelcase */

const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const User = require('../models/UserSchema')
const Account = require('../models/AccountSchema')
const router = express.Router()

// AUTH

router.get('/auth/users', async (req, res) => {
  const users = await User.find()
  res.json(users)
})

router.delete('/users/:id', async (req, res) => {
  await User.findByIdAndRemove(req.params.id)
  res.json('borrado')
})

router.post('/auth/signup', async (req, res) => {
  const { username, password } = req.body
  const user = new User({ username, password })
  user.password = await user.encryptPassword(password)
  await user.save()
  console.log('REGISTRADO', user)
  res.redirect('/')
})

router.post('/auth/signin', function (req, res, next) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    console.log(err)
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
  console.log('DESLOGEADO')
  res.redirect('/')
})

// ACCOUNTS

router.get('/accounts', async (req, res) => {
  const accounts = await Account.find().populate('owner')
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
    previous_rank_league,
    previous_rank_division,
    solo_rank_league,
    solo_rank_division,
    flex_rank_league,
    flex_rank_division,
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
    previous_rank_league,
    previous_rank_division,
    solo_rank_league,
    solo_rank_division,
    flex_rank_league,
    flex_rank_division,
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

module.exports = router
