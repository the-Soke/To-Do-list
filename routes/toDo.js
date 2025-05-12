// used to handle update, delete, add
// used to keep app.js clean and help in management as app.js becomes more complex



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
