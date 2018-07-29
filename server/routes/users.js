const userController = require('../controllers/userController');
const passport = require('passport')
const auth = require('../config/auth');

module.exports = app => {
 
  app.post('/login', userController.login); 

  app.post('/signup', userController.signUp);

  app.get('/verify',auth, userController.checkUser);

  app.put('/user', auth, userController.editUser);

  app.get('/users' , userController.fetchAllUsers);

}



