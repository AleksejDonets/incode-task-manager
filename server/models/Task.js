const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: String,
  },
  estimateTime: String,
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  performer: { type: Schema.Types.ObjectId, ref: "User" }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;