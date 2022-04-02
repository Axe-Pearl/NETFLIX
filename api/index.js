//required dependencies
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const authUser = require("./routes/users");


//dotenv for enviroment variables
dotenv.config({path:"./config.env"});
const PORT = process.env.PORT;

//required module for MongoDB connection 
require("./db/conn");

app.use(express.json());
app.use(require("./routes/auth"));
app.use("/api/users", authUser);

app.listen(PORT,(req,res)=>{
    console.log(`Server running Successfully on ${PORT}`);
});