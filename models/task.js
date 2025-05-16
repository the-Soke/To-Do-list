// In this file, we have the different task which i setup for testing or implementing searching and sorting of the differnt for the different tasks without needing to connect to the database temporaly just for testing

// Here, we are initialing different task and then testing them, either completed or pending taskts, searching by due dates and also a searching functionality to find task by keywords
let tasks = [
    { id: 1, item: "Do your system Programming assignment", completed: false, dueDate: "2025-05-13"},
    { id: 2, item: "Finish your Todo-List project", completed: false, dueDate: "2025-05-15"},
    { id: 3, item: "Buy airtime data", completed: true, dueDate: "2025-05-11"},
    { id: 4, item: "Attend your TC class", completed: false, dueDate: "2025-05-12"},
    { id: 5, item: "Take your bath", completed: true, dueDate: "2025-05-11"},

    // we can then continue adding different taskt if need be
]

let count = tasks.length + 1;

// we get all the tasks
export const getTasks = (filters = {}) => {
    let processedTasks = [...tasks];  // spread operator, so we avoid modifying the original array guys 

    // we are filtering the tasks here by the different status, either completed(true) or pending(false) using teneray operator
    if(filters.status){
        processedTasks = processedTasks.filter(task =>
            filters.status === 'completed' ? task.completed : !task.completed
        );
    }

    //  Searching the different tasks by keywords
    if(filters.search){
        processedTasks = processedTasks.filter(task =>
            task.item.toLowerCase().includes(filters.search.toLowerCase())
        );
    }

    // sorting the different tasks by due dates, we can filter them in ascending or descending order 

    if(filters.sort === 'dueDateAsc' || filters.sort === 'due_date_asc'){ // just for naming convention options to test with
        processedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));   // a.dueDate - b.dueDate makes it in ascending order(oldest first)
    }   // dueDate will convert the dates in strings into Date objects, and can now compare them

    else if(filters.sort === 'dueDateDesc' || filters.sort === 'due_date_desc' ){
        processedTasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));  // descending order for sorting
    }


    return processedTasks;
}

// guys please lets write our other operations in this file and export them into our toDo.js routes, it will keep our code clearner and improvements from everyone who will contribute;


// we can write our order functions here. Also where possible use the try catch block, is a good practice




export default { getTasks }  // then we destructure them here during export, make sure to separate them with a comma
