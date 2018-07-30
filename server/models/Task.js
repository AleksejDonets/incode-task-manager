const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: String,
  description: String,
  taskStatus: String,
  performer: { 
    type: Schema.Types.ObjectId, 
    ref: "User" 
  },
  creator: { 
    type: Schema.Types.ObjectId, 
    ref: "User" 
  },
  comments: [
    {
      author: {
        type: String,
      },
      text: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
    },
  ]
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;