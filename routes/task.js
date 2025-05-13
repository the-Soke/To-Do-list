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
  if (!dueDate || inNaN(Date.parse(dueDate))) {
    return res.status(400).json({error: 'Insert due date(ISO format)'})
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    dueDate: new Date(dueDate),
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});


module.exports = router;
