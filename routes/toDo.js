// used to handle update, delete, add
// used to keep app.js clean and help in management as app.js becomes more complex
import express from 'express';

const app = express();
let tasks = [];
let count = 1;

app.use(express.json());
//The first page users will see.
app.get('/', (req, res) => {
    res.send("Hey there!! Ready to organize your tasks?");
});

// To get all the tasks
app.get('/task', (req, res) => {
    res.json(tasks);
});

//overdue asks
app.get('/task/overdue', (req, res) => {
    const now = new Date();
    const overdueTasks = tasks.filter(task => {
        return task.dueDate && new Date(task.dueDate) < now && !task.completed;
    });
    res.json(overdueTasks);
})

// To add new tasks
app.post('/task', (req, res) => {
    // console.log('REQUEST BODY', req.body);

    const { item, dueDate }  = req.body;
    if (!item)return res.status(400).json({message: "Task is requires"});

    const newtask = {
        id: count++,
        item,
        completed: false,
        dueDate: dueDate ? new Date(dueDate) : null
    };
    
    // console.log("Request body", req.body);
    tasks.push(newtask);
    res.status(201).json(newtask)

    // res.status(201).json({
    //     message: "new task added",
    // });
});

//To remove a task
app.delete('/task/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return res.status(404).json({message: 'Task not found'});

    const deleted = tasks.splice(index, 1);
    res.send("Deleted successfully!");
    res.json(deleted[0]);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});