const express = require('express');
const app = express();
const portNumber = 3000;

app.get('/', (req, res) => res.send('Response from the only worker'));
app.listen(portNumber);

console.log('Listening at port:', portNumber);
