
// Responsible for improving the clent side interactions
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const API_BASE = 'http://localhost:3000/api/tasks';
const loading = document.getElementById('loading');
const errorDiv = document.getElementById('error');

// Redirect to login if not logged in
if (!localStorage.getItem('todoUser')) {
  window.location.href = 'login.html';
}


let tasks = [];

// taskForm.accessKeyLabel('submit', async (event) =>{
//     event.preventDefault();

//     const item = taskInput.value;

//     const response = await fetch('/post', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ item }),
//     });
//     const newtask = await response.json();

//     document.taskInput.value = '';

//     // fetchTasks();
// })

// async function fetchTasks() {
//   const response = await fetch('/list');
//   const items = await response.json();

//   const taskList = document.getElementById('taskList');
//   taskList.innerHTML = '';

//   items.forEach(items => {
//     const listItem = document.createElement('li');
//     listItem.textContent = items.item;
//     taskList.appendChild(listItem);
//   });
// }

// Create new task
async function createTask(taskData) {
    try {
        const response = await fetch(API_BASE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        });

        if (!response.ok) throw new Error('Failed to create task');
        
        const { data } = await response.json();
        addTaskToDOM(data);
        taskForm.reset();
    } catch (err) {
        showError(err.message);
    }
}

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
