import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

console.log("Mongo URI from .env:", process.env.MONGO_URI);

const dbURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));


import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import session from 'express-session';
import router from './routes/index.js';
import taskrouter from './routes/task.js';  




const app = express();

// body-parser middleware setup
//Incomming requests
app.use(express.json());

//Used for parser html forms
app.use(bodyParser.urlencoded({
    extended: true

}));

//using toDo routes
app.use('/tasks', taskrouter);


//Public static files middleware
app.use(express.static('public'));

//Logging middleware using morgan for custom token creation

app.use(morgan('dev'));

//views
app.set('view engine', 'ejs');

//keeping user cookies session setup
app.use(session({
    secret: 'Secrete key for individual user',
    resave: false,
    saveUninitialized: false
}));

// main route 
app.use("/", router);

//starting the server on port 3000 
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});



app.listen(3000, () => console.log('Server Is Running Succesfully '))

//using toDo routes
app.use('/task', taskrouter);


//Public static files middleware
app.use(express.static('public'));

//Logging middleware using morgan for custom token cre

//views
app.set('view engine', 'ejs');

//keeping user cookies session setup
app.use(session({
    secret: 'Secrete key for individual user',
    resave: false,
    saveUninitialized: false
}));

// main route 
app.use("/", router);

//starting the server on port 3000 
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

