const router = require("express").Router();
const User = require("../models/User");

router.get("/",(req,res)=>{
    res.send("Hello!");
});

//REGISTER USER
router.post("/register",async(req,res)=>{
    const {username,email,password,cpassword,ProfilePic} = req.body;
   
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
            const newUser = new User({username,email,password,cpassword,ProfilePic});
            //middleware for hashing will be called here before saving the registered user
            const user = await newUser.save()
            res.status(200).json({message:"User registered Successfully"});
        }
    }
    catch(err){
       console.log(err);
    }
});

module.exports = router;