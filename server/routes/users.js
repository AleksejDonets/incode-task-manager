const userController = require('../controllers/userController');
const passport = require('passport')
const auth = require('../config/auth');

module.exports = app => {
 
  app.post('/login', userController.login); 
  app.post('/signup',auth , userController.signUp);
  /* load user data */
  app.get('/verify',auth, userController.checkUser);
}



