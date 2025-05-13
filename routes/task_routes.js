import express from 'express';

const router =  express.Router();

let tasks = [];
let count = 1;

// net task POST route
router.post('/', async (req, res) => {
    
    const {title, dueDate} = req.body;

    if (!title || !dueDate) {
        return res.status(400).json({
            error: 'Enter title as well as due date'
        });
    }
    const  newTask = ({
        id: count++,
        title, 
        dueDate, 
        completed: false
    });
    
    tasks.push(newTask);
    res.status(202).json(newTask);

});

export default router;