const express = require('express');
const connection = require('./DB/db'); // Fix the path to use single `/`
const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(express.json()); // Parses incoming JSON requests


app.get('/', (req, res) => {
  res.send("Hello server");
});

app.listen(PORT, async () => {

     connection(); 
    
});
