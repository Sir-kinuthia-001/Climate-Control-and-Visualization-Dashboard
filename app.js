/* this js file will get data from arduino store it in a firebase database.
var dweetclient = require("node-dweetio");
var dweetio = new dweetclient();
//this file is also a data analysis engine
var teperature_data_per_minute = temperature_data/60;
console.log(temperature_data_per_minute)*/
//javascript basic server
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
