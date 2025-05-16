import { Router } from 'express';
import { createTask, deleteTask, getTasks } from '../controllers/taskController.js';

const router = Router();

router.route('/')
  .get(getTasks)       // GET /api/tasks
  .post(createTask);   // POST /api/tasks

router.route('/:id')
  .delete(deleteTask); // DELETE /api/tasks/:id

export default router;

