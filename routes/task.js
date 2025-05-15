

import { Router } from 'express';
import { createTask, deleteTask, getTasks } from '../controllers/taskControllers.js';


const router = Router();

router.route('/')
  .get(getTasks)       // GET /api/tasks
  .post(createTask);   // POST /api/tasks


router.route('/:id')
  .delete(deleteTask); // DELETE /api/tasks/:id

export default router;


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


// Export the router using ES Modules
export default router;

