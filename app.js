
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import taskRoutes from './routes/task.js'; // Adjust path if needed


dotenv.config(); 

const app = express();
const PORT = 3000;

 
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Parses JSON request bodies

// Routes
app.use('/api/tasks', taskRoutes); // All task-related routes go through /api/tasks

// Root endpoint
app.get('/', (req, res) => {
  res.send('API is running...');
});

// This is the part Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

});
