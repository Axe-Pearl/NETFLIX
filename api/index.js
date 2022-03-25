//required dependencies
const express = require("express");
const app = express();
const dotenv = require("dotenv");

//dotenv for enviroment variables
dotenv.config({path:"./config.env"});
const PORT = process.env.PORT;

//required module for MongoDB connection 
require("./db/conn");



app.listen(PORT,(req,res)=>{
    console.log(`Server running Successfully on ${PORT}`);
});