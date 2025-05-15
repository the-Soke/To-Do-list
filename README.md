const express = require('express'); const bodyParser = require('body-parser'); const db = require('./db');
const router = express.Router(); router.use(bodyParser.json()); router.post('/tasks', async (req, res) => { const { title, description, due_date } = req.body; const newTask = await db.createTask({ title, description, due_date }); res.json(newTask); });

//How to add Tasks
To test the POST (to add a task): Go to your postman ensure the method is set to POST, type the following "http://localhost:3000/api/tasks" then below the methods field, you'll see stuff like 'Params', 'authorization'... click on 'Body' and select raw. Ensure the raw is set to JSON, (the defult is usually 'Text'). Then in the 'Body' field type something like;
"{
    "item": "Buy milk"
}" Then send.

//How to delete Tasks 
Go to your postman ensure the method is set to DELETE, type the following "http://localhost:3000/api/tasks/:id",  . (make more requests to add more tasks on Postman). Then send.

//How to see the list of all the Tasks
Go to your postman ensure the method is set to GET, type the following "http://localhost:3000/api/tasks" then send.