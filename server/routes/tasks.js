const taskController = require('../controllers/taskController');

module.exports = app => {
  app.post('/task', taskController.createTask);
  app.get('/tasks' , taskController.getAllTasks);
  app.patch('/tasks/:id', taskController.changeTaskStatus);

  app.get('/tasks/:id', taskController.loadActiveTask);
  app.post('/task/comment/:id', taskController.addComment);
  app.post('/task/edit', taskController.editTask);
  app.delete('/tasks/:id', taskController.deleteTask );
  app.get('/tasks/user/:id',  taskController.getUserTask);
}