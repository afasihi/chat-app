const socket = io();

socket.on('countUpdated', (count) => {
  console.log('the count has been updated', count);
  
})