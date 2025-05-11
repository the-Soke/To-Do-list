const express = require('express');
const router = express.Router();

let tasks = []; // temporary in-memory storage


// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Add a new task
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});


module.exports = router;
