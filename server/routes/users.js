const userController = require('../controllers/userController');
const passport = require('passport')
const auth = require('../config/auth');

module.exports = app => {
  /* Login user**/
  app.post('/login', userController.login); 
  /* Sign up*/
  app.post('/signup', userController.signUp);
  /* load user data */
  app.get('/verify',auth, userController.checkUser);

  app.put('/user', auth, userController.editUser);

}



