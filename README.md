# 🚀 TODO LIST PROJECT
# A Collaborative To-Do List PROJECT By TECHCRUSH SCHOLARS GROUP 4


![Tech Stack](https://skillicons.dev/icons?i=nodejs,express,mongodb,js,html,css)

This is a collaborative to-do list Project built with Node.js, Express, and MongoDB by TechCrush Scholars Group 4. Perfect for individuals and teams to manage tasks efficiently.

## ✨ Features Of The project

- User authentication (Login/Logout)
- Task creation, update, and deletion
- MongoDB database integration
- RESTful API Intergration

## 🔧 Technologies Used

- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
- ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

## � Getting Started

### Prerequisites
- Node.js (v14 and above)
- local MongoDB installation or MongoDb Atlast
- Git and Github
- 

### Installation
1. Clone the repository: 
   git clone https://github.com/the-Soke/To-Do-list.git

2. Install all dependencies
   npm install

3. Create a .env file in your root directory and ask us to send you the MongoDB URL for your DB connection

4. Start the application
    npm run dev or npm start

### Default Login Credentials
  . Username: Tobi
  . Password: perfectscore1
   
### Project Structure

PROJECT-TOGO/
├── models/             # MongoDB models
│   └── tasks.js
├── public/             # Static files
│   └── auth.js
├── routes/             # Route definitions
│   ├── index.js
│   ├── login.js
│   ├── task.js
│   └── toDo.js
├── views/              # View templates
│   └── env
├── package.json        # Project metadata
├── app.js              # Main application file
└── README.md           # Documentation

### HOw To Add Tasks
To test the POST (to add a task): Go to your postman ensure the method is set to POST, type the following "http://localhost:3000/task/post" then below the methods field, you'll see stuff like 'Params', 'authorization'... click on 'Body' and select raw. Ensure the raw is set to JSON, (the defult is usually 'Text'). Then in the 'Body' field type something like;
//How to add Tasks
To test the POST (to add a task): Go to your postman ensure the method is set to POST, type the following "http://localhost:3000/api/tasks" then below the methods field, you'll see stuff like 'Params', 'authorization'... click on 'Body' and select raw. Ensure the raw is set to JSON, (the defult is usually 'Text'). Then in the 'Body' field type something like;

"{
    "item": "Buy milk"
}" Then send.


### How to delete Tasks
Go to your postman ensure the method is set to DELETE, type the following "http://localhost:3000/task/1", the "/1" is specifically referencing the Task with ID 1. (make more requests to add more tasks on Postman). Then send.

### How to see the list of all the Tasks
Go to your postman ensure the method is set to GET, type the following "http://localhost:3000/task/list" then send.


### 🤝 How to Contribute

We welcome contributions from developers of all skill levels! Here's how you can help:

1. Clone the repository
2. Create a new branch for your feature (`git checkout -b yourFeatureBranchNameHere`)
3. Commit your changes (`git commit -m 'Your changes'`)
4. Push to the branch (`git push origin yourFeatureBranchNameHere`)
5. Open a Pull Request

### How To Search Tasks
1. Search by keyword. example 
    http://localhost:3000/task?search=buyyourbread
2. Search by status. e.g
   http://localhost:3000/task?status=completed

3. Search by Duetdates


## 🙏 Acknowledgments
- Thanks to all contributors who have helped make this project better!. It shall be well with You

💡 Happy Coding guys! Let's build something amazing together!

 
### .env file
MONGODB_URI=mongodb+srv://abubakarsaheed50:pT9gLv5IID9fBnOK@cluster0.2aifnxo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=development
PORT=3000

