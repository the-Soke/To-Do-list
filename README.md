const express = require('express'); const bodyParser = require('body-parser'); const db = require('./db');
const router = express.Router(); router.use(bodyParser.json()); router.post('/tasks', async (req, res) => { const { title, description, due_date } = req.body; const newTask = await db.createTask({ title, description, due_date }); res.json(newTask); });
