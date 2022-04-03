//required dependencies
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const authUser = require("./routes/users");
const authMovies = require("./routes/movies");
const authLists = require("./routes/lists");

//dotenv for enviroment variables
dotenv.config({path:"./config.env"});
const PORT = process.env.PORT;

//required module for MongoDB connection 
require("./db/conn");

app.use(express.json());
app.use(require("./routes/auth"));
app.use("/api/users", authUser);
app.use("/api/movies", authMovies);
app.use("/api/lists",authLists);

app.listen(PORT,(req,res)=>{
    console.log(`Server running Successfully on ${PORT}`);
});