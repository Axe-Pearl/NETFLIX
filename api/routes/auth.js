const router = require("express").Router();
const User = require("../models/User");
const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

//REGISTER USER
router.get("/register", (req,res)=>{ 
    res.send("Register page exists");
})
router.post("/register",async(req,res)=>{
    const { username,email,password,cpassword } = req.body;
    console.log("from server",req.body);
    if(!username || !email || !password || !cpassword){
        return res.status(422).json({error:"Please fill all required fields"});
    }
    try{
        const userExist = await User.findOne({email:email})
        if(userExist){
            return res.status(422).json({message:"User already Exists"});
        }
        else if(password!=cpassword){
            return res.status(422).json({message:"Password not matching!"});
        }
        else{
            const newUser = new User({username,email,password,cpassword});
            //middleware for hashing will be called here before saving the registered user
            const user = await newUser.save()
            res.status(200).json({message:"User registered Successfully"});
        }
    }
    catch(err){
       console.log(err);
    }
});

//LOGIN
router.post("/login",async (req,res)=>{
     const {email,password} = req.body;
     if(!email || !password){
         return res.status(422).json({message:"Fill all credentials"});
     }
     const userExist = await User.findOne({email:email});
     if(userExist){
        const isMatch = await bycrpt.compare(password,userExist.password);
        if(isMatch){
            const accessToken = jwt.sign(
            {_id:userExist._id, isAdmin:userExist.isAdmin},
            process.env.SECRET_KEY
            );
            const user = userExist._doc;
            return res.status(201).json({message:"User Logged In Successfully!",user:{...user,accessToken }});
        }
        return res.status(422).json({message:"Invalid Credentials"});
     }
     return res.status(422).json({message:"User does not Exist"});
});

module.exports = router;
