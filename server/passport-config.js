const passport = require('passport')
const ExtractJWT = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local').Strategy
const JWTStrategy = require('passport-jwt').Strategy
const User = require('./models/UserSchema')

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
    },
    async (username, password, done) => {
      // Match Email's User
      const user = await User.findOne({ username }).select('+password')
      if (!user) {
        return done(null, false, { message: 'Not User found.' })
      } else {
        // Match Password's User
        const match = await user.matchPassword(password)
        if (match) {
          return done(null, user)
        } else {
          return done(null, false, { message: 'Incorrect Password.' })
        }
      }
    }
  )
)

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_jwt_secret',
    },
    function (jwtPayload, cb) {
      return User.findById(jwtPayload.id)
        .then((user) => {
          return cb(null, user)
        })
        .catch((err) => {
          return cb(err)
        })
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})
