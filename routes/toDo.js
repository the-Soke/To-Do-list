// used to handle update, delete, add
// used to keep app.js clean and help in management as app.js becomes more complex

// used to handle update, delete, add
// used to keep app.js clean and help in management as app.js becomes more complex
import express from 'express';
const router = express.Router();

// const app = express();
let tasks = [];
let count = 1;

router.use(express.json());
//The first page users will see.
router.get('/', (req, res) => {
    res.send("Hey there!! Ready to organize your tasks?");
});

// To get all the tasks
router.get('/list', (req, res) => {
    res.json(tasks);
});

// To add new tasks
router.post('/post', (req, res) => {
    // console.log('REQUEST BODY', req.body);

    const { item }  = req.body;
    // if (!items)return res.status(400).json({message: "Task is requires"});
    const newtask = {
        id: count++,
        item,
        completed: false
    };
    // console.log("Request body", req.body);
    tasks.push(newtask);
    res.status(201).json(newtask)

    // res.status(201).json({
    //     message: "new task added",
    // });
});

//To remove a task
router.delete('/task/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return res.status(404).json({message: 'Task not found'});

    const deleted = tasks.splice(index, 1);
    res.send("Deleted successfully!");
    res.json(deleted[0]);
});

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
export default router;
=======



const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/todoDB?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));



const Todo = mongoose.model('Todo', {
  task: String,
  completed: Boolean
});



app.post('/todos', async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.send(newTodo);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

