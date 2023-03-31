const express = require('express');

const server = express();

const PORT = 5000;

server.get('/',(req,res) => {
    res.send('Hello, from backed :)');
});

server.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
});