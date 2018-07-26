const passport = require("passport");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/info");

module.exports = {
  checkUser(req, res) {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (info) {
        return res.status(401).send({
          errors: [info]
        });
      }
      return res.status(200).json({ isLoad: true, activeUser: user });
    })(req, res);
  },
  login(req, res, next) {
    passport.authenticate(
      'login',
      { session: false },
      (err, user, info) => {
        if (err) {
          return res.status(500).send(err);
        }
        if (info) {
          return res.status(401).send({
            errors: [info]
          });
        }
        return req.login(user, { session: false }, loginError => {
          if (loginError) {
            return res.status(500).send(loginError);
          }
          const payload = {
            id: user.id,
            email: user.email
          }
          const token = jwt.sign(payload, jwtSecret.secretOrKey);
          return res.send({ user, token });
        });
      }
    )(req, res, next);
  },

  signUp(req, res) {
    passport.authenticate(
      'sign',
      { session: false },

      (err, user, info) => {
        if (err) {
          return res.status(500).send(err);
        }
        if (info) {
          return res.status(401).send({
            errors: [info]
          });
        }
        return req.login(user, { session: false }, loginError => {
          if (loginError) {
            return res.status(500).send(loginError);
          }
          const token = jwt.sign(user.id, jwtSecret.secretOrKey);
          return res.send({ user, token });
        });
      }
    )(req, res);
  },
}