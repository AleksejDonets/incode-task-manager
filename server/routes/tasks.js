const taskController = require('../controllers/taskController');

module.exports = app => {
  app.post('/task', taskController.createTask);
}