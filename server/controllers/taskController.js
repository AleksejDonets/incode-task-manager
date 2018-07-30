const mongoose = require('mongoose');
const Task  = require('../models/Task');

module.exports = {
  async createTask ( req, res) {
    
    try{
      const newTask = await new Task({
        title: req.body.task.title,
        description: req.body.task.description,
        taskStatus: req.body.task.taskStatus,
        performer: req.body.task.taskPerformer,
        creator: req.body.creatorId,
      });
      newTask.save();
      return res.send({ success: true, message: 'Task successfully created'})
    }catch (e) {
      console.log(e)
      res.status(500).send(e);
    }
  },
  async getAllTasks(req, res){
    try{
      const allTasks = await Task.find({});
      res.send(allTasks)
    }catch (e){
      e.send(e)
    }
  },
  async changeTaskStatus( req, res) {
    try {
      const changeTask = await Task.findOneAndUpdate(
        {
          _id: req.body.id
        },
        {
          $set: { taskStatus:  req.body.statusTask}
        },
        {
          new: true
        }
      )
      res.send(changeTask);
    } catch (e) {
      res.status(500).send(e);
    }
  },
  async loadActiveTask(req, res) {
    try{
      const activeTask = await Task.findOne(
        {
          _id: req.params.id
        }
      )
      res.send(activeTask)
    } catch(e) {
      res.status(500).send(e);
    }
  },
  async addComment(req, res) {
    console.log(req.body.comment)
    try{
      const task = await Task.findOneAndUpdate(
        {
        _id: req.body.idTask
        },
        {
          $set: {comments : [...req.body.comment]}
        },
        {
          new: true
        }
      );
      
     
      res.send(task);
    } catch(e) {
      res.status(500).send(e);
    }
  },
  async editTask(req, res) {
    try{
      const task = await Task.findOneAndUpdate(
        {
          _id: req.body.taskId
        },
        {
         $set: {... req.body.task}
        },
        {
          new:true
        }
      )
      res.send(task)
    }catch(e) {
      res.status(500).send(e);
    }
  },
  async deleteTask(req, res) {
    console.log(req)
    try {
      const { id } = req.params;
      await Task.deleteOne({ _id: id });
      res.sendStatus(200);
    } catch (e) {
      res.status(500).send(e);
    }
  },
  async getUserTask(req, res) {
    try {
      const { id } = req.params;
      const tasks = await Task.find({
         performer: id 
      })
      res.send(tasks);
    } catch (e) {
      res.status(500).send(e);
    }
  },
}