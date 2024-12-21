const io = require('socket.io-client');
const socket = io('http://192.168.0.41:3000');

console.log('conect')

socket.on('connect', () => {

  console.log('Connected how: ', socket.id);

  setInterval(() => {
    console.log('Sending data');
    socket.emit('data', 'Hello World');
  }, 3000);

  socket.on('data', (data) => {
    console.log('Received data: ', data);
  });

  socket.on('userDisconnected', (data) => {
    console.log('Disconnected: ', data);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected');
  });
});
