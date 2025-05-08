import express from 'express'
const app = express();

// main route 
app.get("/", function(req, res) {
    res.send('Welcome to todays To-Do Planning!');

});

app.listen(3000, function(){
    console.log('Server Is Running Succesfuly ');

});


