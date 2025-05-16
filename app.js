import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config(); 

import connectDB from './config/db.js';
import taskRoutes from './routes/task.js'; // Adjust path if needed
// import { pathToRegexp } from 'path-to-regexp';


// // const { pathToRegexp } = require('path-to-regexp');
// const re = pathToRegexp('/user/:id');
// console.log(re.test('/user/123')); // Should return true


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = 3000;

 
connectDB();

// Middleware
app.use(express.json()); // Parses JSON request bodies
app.use(cors());


// Routes
app.use('/api/tasks', taskRoutes); // All task-related routes go through /api/tasks

// Root endpoint
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// Static files and SPA fallback AFTER 
//app.use(express.static(path.join(__dirname, 'public')));
//app.get('*', (req, res) => {
 // res.sendFile(path.join(__dirname, 'public', 'login.html'));
//});

// This is the part Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

});


