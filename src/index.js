const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socketio(server)

const port = process.env.PORT || 3000;
const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));

let count = 10;

io.on('connection', (socket) => {
  console.log('the websocket is connected');
  socket.emit('countUpdated', count);
})

// app.get('', (req, res) => {
//   res.render('index')
// })

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
})