// home page routes
import express from 'express';
const router = express.Router();

router.get('/', (reg,res) => {
    res.render('index', {title: 'To-Do App'});
})

export default router;