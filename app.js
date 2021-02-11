const http = require("http");
const fs = require ("fs").promises;
//address $ port
const hostname = "localhost";
const port ="8081";

const server = http.createServer((req,res)=> {
  //file to host -> index.html
  fs.readFile(__dirname + "/index.html").then((content)=>{
    res.statusCode = 200;
    res.setHeader("content-type","text.html");
    res.end(content);
  });
});
server.listen(port, hostname,()=>{
  console.log(`server is running at http://${hostname}:${port}`)
});

socket.on("connect",function(){
  console.log("connected to socket I/O server!");
  console.log(name + "wants to join" + room);
  //to join a specific room
  socket.emit('joinroom',{
    name:name,
    room:room
  });
});

$('#messagebox').keyup(function(){
  console.log('happening');
  typing = true;
  $("#icon-type").removeClass();
  //console.log("typing.....");
  //socket.emit('typing','typing....');
  socket.emit('typing',{
    text:name + "is typing...."
  });
  clearTimeout(timeout);
  timeout = setTimeout(timeoutFunction, 1000);
});

var $form=$("#messageform");
var $message1 = $form.find('input[name=message]');
$form.on("submit", function(event){
  event.preventDefault();
  var msg = $message1.val();
  //prevent js injection attack
  msg = msg.replace(/</g, "&1t;").replace(/>/g, "&gt;").trim();
  if(msg==="")return -1;//empty messages cannot be sent

  socket.emit("message", {
    text: msg,
    name:name
  });
  //show user messageform
  var $messages = $(".messages")
})
