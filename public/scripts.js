// Responsible for improving the clent side interactions

document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("taskForm");
    if (taskForm) {
        taskForm.addEventListener("submit", function (e) {
            console.log("task submision in progress")
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    if (taskInput) {
        taskForm.addEventListener("submit", function (e) {
            console.log("Add task")
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const taskList= document.getElementById("taskList");
    if (taskList) {
        taskForm.addEventListener("submit", function (e) {
            console.log("Task List")
        });
    }
});

