// let tasks = [];

// export const getAllTasks = (req, res) => {
//   res.render('index', { tasks });
// };

// export const createTask = (req, res) => {
//   const newTask = {
//     id: Date.now().toString(),
//     title: req.body.title,
//     description: req.body.description,
//     due_date: req.body.due_date || 'No deadline'
//   };
//   tasks.push(newTask);
//   res.redirect('/tasks');
// };

// export const deleteTask = (req, res) => {
//   tasks = tasks.filter(task => task.id !== req.params.id);
//   res.redirect('/tasks');
// };



import Task from '../models/Task.js';

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ created_at: -1 });
    res.json({
      success: true,
      count: tasks.length,
      data: tasks
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Create task
export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      success: true,
      data: task
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    }
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// Delete task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    
    if (!task) {
      return res.status(404).json({
        success: false,
        error: 'Task not found'
      });
    }

    res.json({
      success: true,
      data: {}
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};