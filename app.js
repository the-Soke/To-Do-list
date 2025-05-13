import express from 'express';
import bodyParser from 'body-parser';
// import morgan from 'morgan';
import dotenv from 'dotenv';
import session from 'express-session';
import router from './routes/index.js';
import mongoose from 'mongoose';
import task_route from './routes/task_routes.js';

const app = express();
app.use(express.json());
dotenv.config();

//Used for parser html forms
app.use(bodyParser.urlencoded({
    extended: true

}));

// body-parser middleware setup
//Incomming requests
app.use(express.json());

//Public static files middleware
app.use(express.static('public'));


//Logging middleware using morgan for custom token creation

// app.use(morgan('dev'));

//views
app.set('view engine', 'ejs');

//keeping user cookies session setup
app.use(session({
    secret: 'Secrete key for individual user',
    resave: false,
    saveUninitialized: false
}));

//database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to Database'))
.catch(err => console.log(err));

// main route 
app.use("/", router);

//task routes
app.use('/api/tasks', task_route);

app.get("/", (req, res) => {
  res.render("index", {tasklist: tasks });

})

app.post('/add', (req, res) => {
    const task = req.body.newTask;
    if(task) tasks.push(tasj);
    res.redirect('/')
})

//starting the server on port 3000 
app.listen(3000, () => console.log('Server Is Running Succesfuly '))



// const taskForm = document.getElementById('taskForm');
// const taskInput = document.getElementById('taskInput');
// const taskList = document.getElementById('taskList');


// let tasks = [];


// function renderTasks() {
//   taskList.innerHTML = '';

//   tasks.forEach((task, index) => {
//     const li = document.createElement('li');
//     li.textContent = task;

//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = '❌';
//     deleteBtn.onclick = function() {
//       tasks.splice(index, 1);
//       renderTasks();
      
//     };

//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);
//   });
// }

// taskForm.addEventListener('submit', function(e) {
//   e.preventDefault();
  
//   const task = taskInput.value.trim();
//   if (task) {
//     tasks.push(task);
//     renderTasks();
//     taskInput.value = '';

//   }
// });


  