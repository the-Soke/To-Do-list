import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import session from 'express-session';
import router from './routes/index.js';

const app = express();

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
app.listen(3000, () => console.log('Server Is Running Succesfuly '))




