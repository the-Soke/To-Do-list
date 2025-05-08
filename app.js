import express from 'express';
const bodyParser = required ('body-parser');

const app = express();

// body-parser middleware setup


// main route 
app.get("/", function(req, res) {
    res.send('Welcome to todays To-Do Planning!');

});

app.listen(3000, function(){
    console.log('Server Is Running Succesfuly ');

});


