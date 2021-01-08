// this js file will get data from arduino store it in a firebase database.
var dweetclient = require("node-dweetio");
var dweetio = new dweetclient();
//this file is also a data analysis engine
var teperature_data_per_minute = temperature_data/60;
console.log(temperature_data_per_minute)
