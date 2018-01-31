const express = require('express');
const io = require('socket.io')();
const path = require('path');
const pool = require('./db');

const app = express();

pool.connect();

app.use(express.static(path.join(__dirname, '../build')));

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      socket.emit('timer', new Date());
    }, interval);
  });
});

const server = app.listen(3000, () => {
  console.log('listening in port 3000');
});

io.listen(server);
