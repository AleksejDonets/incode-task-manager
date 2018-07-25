const UserController = require('../controllers/userController')

module.exports = app => {
  app.post('/login', UserController.login);
  app.post('/signup', UserController.signUp);

}



