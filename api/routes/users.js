const router = require("express").Router();
const { findByIdAndDelete } = require("../models/User");
const User = require("../models/User");
const verify = require("../verifyToken");
//UPDATE

router.put("/:id", verify, async(req,res)=>{
    if(req.user._id === req.params.id || req.user.isAdmin){
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true});
            return res.status(200).json(updatedUser);
        }
        catch(err){
            return res.status(500).json(err);
        }
    }
    else{
        return res.status(401).json("You are not authenticated");
    }
});

//DELETE
router.delete("/:id",verify,async(req,res)=>{
     if(req.user._id === req.params.id || req.user.isAdmin){
         try{
             await User.findByIdAndDelete(req.params.id);
             return res.status(200).json({message:"User has been deleted"});
         }
         catch(err){
             return res.status(400).json(err);
         }
     }
     else{
         return res.status(400).json("You can delete only your account");
     }
});

// GET - search users
router.get("/find/:id", async(req,res)=>{
   try{
      const user = await User.findById(req.params.id);
      res.status(200).json(user)
   }
   catch(err){
      return res.status(500).json(err);
   }
});

router.get("/", verify,async(req,res)=>{
    if(req.user.isAdmin){
        try{
            const users = await User.find().sort();
            res.status(200).json(user)
         }
         catch(err){
            return res.status(500).json(err);
         }
    }
 });

 //GET ALL
 router.get("/findAll/",verify,async(req,res)=>{
     const query = req.query.new;
     if(req.user.isAdmin){
       try{
          const users = query ? await User.find().limit(10) : await User.find();
          return res.status(200).json(users);
       }
       catch(err){
           return res.status(500).json(err);
       }
     }
     else{
         return res.status(403).json({message:"You are not allowed to see all users!"});
     }
 })

 //GET USER STATS
//  router.get("/stats",verify,async(req,res)=>{
//      if(req.user.isAdmin){
//          try{

//          }
//          catch(err){

//          }
//      }
//      else{
//          return res.status(403).json("You are not allowed to perform this action");
//      }
//  })


module.exports = router;