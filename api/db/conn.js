//connecting MongoDB

const mongoose = require("mongoose");
const URL = process.env.URL;

mongoose.connect(URL,{
    useNewUrlParser:true
})
.then(()=>{
    console.log("MongoDB connected Successfully!");
})
.catch((err)=>{
    console.log(err);
});
