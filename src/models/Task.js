const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  taskName: { type: String, required: true },
  taskDetails: { type: String, required: true },
  dueDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ["To Do", "Ongoing", "Completed"],
    default: "To Do",
  },
  priority: {
    type: String,
    enum: ["Low", "Moderate", "High"],
    default: "Moderate",
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
