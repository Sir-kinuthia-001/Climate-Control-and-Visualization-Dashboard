socket.emit("message", {
  text: "Welcome to chat Application !",
  timestamp: moment().valueOf(),
  name:"system"
});
socket.on('joinroom', function(req){
  clientinfo[socket.id]=req;
  socket.join(req.room);
  //broadcast new user joined joinroom
  socket.broadcast.to(req.room).emit("message", {
    name:"system",
    text: req.name + 'has joined',
    timestamp:moment().valueOf()
  });
});
socket.on('typing', function(message){//broadcast this message to all users in that room
  socket.broadcast.to(clientInfo[socket.id].room).emit("typing", message);
});
