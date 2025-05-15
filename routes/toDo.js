// used to handle update, delete, add
// used to keep app.js clean and help in management as app.js becomes more complex

import express from 'express';
import { getTasks } from '../models/tasks.js';


const router = express.Router();
//let tasks = []; // Lets create the tasks in the models folder. Thats the right approach when structuring our folder to content the userModels or anyother model. Infact we use it to create our different objects
let count = 1;
// app.use(express.json());


router.get('/', (req, res) => {

    try {   // Please guys let's us try using the try catch blocks to be able to easily notice our errors, if not we may take time debugging cudoe
        
        const tasks = getTasks(req.query);
        res.json(tasks);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



 

export default router;