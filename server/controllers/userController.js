const mongoose = require("mongoose");
const passport = require("passport");

module.exports = {
  login(req, res) {
    passport.authenticate(
      "local-login",
      { session: false },
      
    )(req, res);
  },
}
