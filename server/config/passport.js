const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const info = require('./info');
const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = info.secretOrKey;

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'login',
      passwordField: 'password'
    },
    (login, password, done) => {
      User.findOne({ email: login }, function(err, user) {
      
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: 'No user found' });
          }
          if (!user.validPassword(password)) {
            return done(null, false, { message: 'Wrong password' });
          }
          
          return done(null, user);

      })
     

        
     
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



passport.use(new JwtStrategy(options, function(jwt_payload, done) {
  User.findOne({id: jwt_payload}, function(err, user) {
      if (err) {
          return done(err, false);
      }
      if (user) {
          return done(null, user);
      } else {
          return done(null, false);
          // or you could create a new account
      }
  });
}));