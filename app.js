import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

console.log("Mongo URI from .env:", process.env.MONGO_URI);

const dbURI = process.env.MONGO_URI;

/*
// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

*/ 
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import session from 'express-session';
import router from './routes/index.js';
import taskrouter from './routes/task.js';  


// for testing searchint by dates, keywords and status localy before connecting to db
import todoRouter from './routes/toDo.js';
import indexRouter from './routes/index.js'  // home page route?


const app = express();
const PORT = 3000;

// body-parser middleware setup
//Incomming requests
app.use(express.json());

//Used for parser html forms
app.use(bodyParser.urlencoded({
    extended: true

}));


// ## Public static files middleware
app.use(express.static('public'));

// ## Logging middleware using morgan for custom token creation
app.use(morgan('dev'));


/*
// ## using toDo routes
app.use('/task', taskrouter);
*/

// ## Public static files middleware
app.use(express.static('public'));

//views
app.set('view engine', 'ejs');

//keeping user cookies session setup
app.use(session({
    secret: 'Secrete key for individual user',
    resave: false,
    saveUninitialized: false
}));

// All routes here please 
app.use("/", router);
// app.use("/task", todoRouter);



//starting the server on port 3000 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

