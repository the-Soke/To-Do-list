const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();

// body-parser middleware setup
app.use(bodyParser.json({

}))


// main route 
app.get("/", (req, res) => {
    res.send('Welcome to Todays To-Do Planning!');

});

app.listen(3000, () => console.log('Server Is Running Succesfuly '))




