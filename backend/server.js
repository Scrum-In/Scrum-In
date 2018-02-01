const express = require('express');
const path = require('path');
const pool = require('./db');

const app = express();

pool.connect();
// const http = require('http').Server(app);

// app.get('/', (req, res) => {
//   res.send('<h1>Hello World</h1>');
// });

app.use(express.static(path.join(__dirname, '../build')));

app.listen(3000, () => {
  console.log('listening on port 3000');
});
