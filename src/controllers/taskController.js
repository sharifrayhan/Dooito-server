const Task = require('../models/Task');

// Get all tasks
const allTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single task by ID
const singleTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new task
const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).send('Task created successfully');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

// Update a task by ID
const updateTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a task by ID
const deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  allTasks,
  singleTask,
  createTask,
  updateTask,
  deleteTask,
};
