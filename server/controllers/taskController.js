const mongoose = require('mongoose');
const Task  = require('../models/Task');

module.exports = {
  async createTask ( req, res, done) {
      console.log(req.body);
    
      const newTask = await new Task({
        title: req.body.task.title,
        description: req.body.task.description,
        taskStatus: req.body.task.taskStatus,
        performer: req.body.task.taskPerformer,
        creator: req.body.creatorId,
      });
      newTask.save();
      return done(null, newTask)

  },
}