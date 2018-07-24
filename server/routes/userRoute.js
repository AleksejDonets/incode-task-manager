const passport = require("passport");
const userController = require('../controllers/userController');

module.exports = app => {
 
  app.post('/login', (req, res) => {
    res.send('11111')
  })
}