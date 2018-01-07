const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

app.use(express.static('client'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/client/index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(3000, () => console.log('Example app listening on port 3000!'));