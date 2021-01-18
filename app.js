const http = require("http");
const fs = require ("fs").promises;
//address $ port
const hostname = "localhost";
const port ="8080";

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
