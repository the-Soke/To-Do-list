// home page routes
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'To-Do App'});
})

router.post('/task', (req, res) => {
    const items = req.body.items;

})

export default router;