const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();

// body-parser middleware setup
app.use(bodyParser.json({

}))


// main route 
app.get("/", (req, res) => {
    res.send('Welcome to Todays To-Do Planning!');

});

app.listen(3000, () => console.log('Server Is Running Succesfuly '))



const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Redirect to login if not logged in
if (!localStorage.getItem('todoUser')) {
  window.location.href = 'login.html';
}


let tasks = [];


function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.onclick = function() {
      tasks.splice(index, 1);
      renderTasks();
      
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    renderTasks();
    taskInput.value = '';

  }
});


  