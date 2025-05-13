import express from 'express';
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

  // Delete a task
router.delete('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex(task => task.id === taskId);

  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(index, 1);
  res.status(200).json({ message: 'Task deleted successfully' });
});

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Export the router using ES Modules
export default router;
