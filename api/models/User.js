//module for user schema 

const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
    username:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    cpassword:{type:String, required:true},
    Profilepic:{type:String, default:""},
    isAdmin:{type:Boolean, default:false}
    },
    {timestamps:true}
);

UserSchema.pre('save', async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
});

module.exports = mongoose.model("User", UserSchema);