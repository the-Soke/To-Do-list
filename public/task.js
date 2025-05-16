// const API_BASE = 'http://localhost:3000/api/tasks';
// const taskForm = document.getElementById('taskForm');
// const taskList = document.getElementById('taskList');
// const loading = document.getElementById('loading');
// const errorDiv = document.getElementById('error');

// // Fetch all tasks
// async function fetchTasks() {
//     try {
//         const response = await fetch(API_BASE);
//         const { data } = await response.json();
//         loading.classList.add('hidden');
//         renderTasks(data);
//     } catch (err) {
//         showError('Failed to load tasks');
//     }
// }

// // Delete task
// async function deleteTask(taskId) {
//     try {
//         const response = await fetch(`${API_BASE}/${taskId}`, {
//             method: 'DELETE',
//         });

//         if (!response.ok) throw new Error('Failed to delete task');
        
//         document.getElementById(taskId).remove();
//     } catch (err) {
//         showError(err.message);
//     }
// }

const API_BASE = 'http://localhost:3000/api/tasks';
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const loading = document.getElementById('loading');
const errorDiv = document.getElementById('error');

// Fetch all tasks
async function fetchTasks() {
    try {
        const response = await fetch(API_BASE);
        const { data } = await response.json();
        loading.classList.add('hidden');
        renderTasks(data);
    } catch (err) {
        showError('Failed to load tasks');
    }
}

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

// Delete task
async function deleteTask(taskId) {
    try {
        const response = await fetch(`${API_BASE}/${taskId}`, {
            method: 'DELETE',
        });

        if (!response.ok) throw new Error('Failed to delete task');
        
        document.getElementById(taskId).remove();
    } catch (err) {
        showError(err.message);
    }
}

// Render tasks to DOM
function renderTasks(tasks) {
    taskList.innerHTML = '';
    tasks.forEach(task => addTaskToDOM(task));
}

function addTaskToDOM(task) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task-card';
    taskElement.id = task._id;
    taskElement.innerHTML = `
        <div class="task-info">
            <h3>${task.title}</h3>
            <p>${task.description || ''}</p>
            <small>Due: ${task.due_date ? new Date(task.due_date).toLocaleDateString() : 'No deadline'}</small>
        </div>
        <button class="delete-btn" onclick="deleteTask('${task._id}')">Delete</button>
    `;
    taskList.appendChild(taskElement);
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
    setTimeout(() => errorDiv.classList.add('hidden'), 3000);
}

// Event Listeners
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const newTask = {
        title: document.getElementById('title').value.trim(),
        description: document.getElementById('description').value.trim(),
        due_date: document.getElementById('dueDate').value || undefined
    };

    if (!newTask.title) return showError('Title is required');
    
    await createTask(newTask);
});

// Initial load
fetchTasks();