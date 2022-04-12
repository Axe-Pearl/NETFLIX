const router = require("express").Router();
const List = require("../models/Lists");
const verify = require("../verifyToken");

//POST (new movie)

router.post("/", verify, async(req,res)=>{
    if(req.user.isAdmin){
       const newList = new List(req.body);
       try{
            const savedList = await newList.save();
            res.status(200).json(savedList);
       }
       catch(err){
           return res.status(500).json(err);
       }
    }
    else{
        return res.status(401).json("Access Denied!!");
    }
});

//DELETE
router.delete("/:id",verify,async(req,res)=>{
    if(req.user.isAdmin){
        try{
           await List.findByIdAndDelete(req.params.id);
           return res.status(200).json({message:"User deleted successfully!"});
        }
        catch(err){
            return res.status(500).json(err);
        }
    }
    else{
        res.status(403).json({message:"Access Denied!!"});
    }
})
//GET
router.get("/",verify,async(req,res)=>{
   const typeQuery = req.query.type;
   const genreQuery = req.query.genre;
   let list = [];
   try{
       if(typeQuery){
           if(genreQuery){
               list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type:typeQuery, genre: {$regex: genreQuery,$options: "i"}}}
               ]);
           }
           else{
                list = await List.aggregate([
                    {$sample:{size:10}},
                    {$match:{type:typeQuery}}
                ])
           }
       }
       else{
            list = await List.aggregate([
                {$sample:{size:10}}
            ])
       }
       return res.status(200).json(list);
   }
   catch(err){
       return res.status(500).json(err);
   }
});
module.exports = router;