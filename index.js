var express = require("express");
var socket = require("socket.io");

 var app = express();
 var server = app.listen(4000, function(){
      console.log("listening");
 });
 app.use(express.static('public'));

var io = socket(server);

io.on("connection", function(socket){
  console.log("Made socket connection");
  socket.on("chat", function(data){
    io.sockets.emit("chat",{socketName:socket.id, message: data.message });
  });

  socket.on("typing", function(data){
    socket.broadcast.emit("typing",{socketName:socket.id, message:"typing" });
  })
});
