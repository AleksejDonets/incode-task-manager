const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const info = require('./info');

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'login',
      passwordField: 'password',
    },
    ( login, password, done) => {
      User.findOne(
        { $or: [{ email: login }, {name: login}] }, 
        function(err, user) {
       
          if (err) { 
            return done(err); 
          }
          if (!user) {
            return done(null, false, { message: 'No user found' });
          }
          if (!user.validPassword(password)) {
              return done(null, false, { message: 'Wrong password' });
          }
          return done(null, user);
        }
      )
    }
  )
);
passport.use(
  'sign',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField:'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {
      
      User.findOne({ email }, function(user){
        if(user) {
          return done(null, false, { message: 'User with this email already exists' });
        }
        const NewUser = new User({
          name: req.body.name,
          email:email,
          brith: req.body.name,
        });
        NewUser.password = NewUser.encryptPassword(password);
        NewUser.save();
        return done(null, NewUser)
      })
    }
  )
);



passport.use(
  new JWTstrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('Bearer'),
      secretOrKey: info.secretOrKey
    },
    (jwtPayload, done) => {
      User.findOne({ _id: jwtPayload.id })
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    }
  )
);