var socket = io.connect("http://localhost:4000");

function handleSendMessage(){
    socket.emit("chat",{
      message: document.getElementById("message").value
    }
  );
  document.getElementById("message").value = "";
}

socket.on('chat', function (data) {
  document.getElementById("output").innerHTML += '<div>'+ data.socketName + ':' + data.message + '</div>'
});

function typing(){
    socket.emit("typing",{
      message: "typing"
    }
  );
}

socket.on('typing', function (data) {
  console.log(data.socketName +" " +"typing");
});
