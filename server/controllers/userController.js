const passport = require("passport");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/info");

module.exports = {
  login(req, res) {
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
          const token = jwt.sign(user.id, jwtSecret.secretOrKey);
          return res.send({ user, token });
        });
      }
    )(req, res);
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