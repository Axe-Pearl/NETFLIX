const router = require("express").Router();
const Movie = require("../models/Movies");
const verify = require("../verifyToken");

//POST (new movie)

router.post("/", verify, async(req,res)=>{
    if(req.user.isAdmin){
       const newMovie = new Movie(req.body);
       try{
            const savedMovie = await newMovie.save();
            res.status(200).json(savedMovie);
       }
       catch(err){
           return res.status(500).json(err);
       }
    }
    else{
        return res.status(401).json("Access Denied!!");
    }
});

//UPDATE

router.put("/:id",verify,async(req,res)=>{
     if(req.user.isAdmin){
         try{
             const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
             return res.status(200).json(updatedMovie);
         }
         catch(err){
             return res.status(400).json(err);
         }
     }
     else{
         return res.status(400).json("Access Denied!!");
     }
});


// DELETE
router.delete("/:id", verify, async(req,res)=>{
   if(req.user.isAdmin){
   try{
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json({message:"Movie Delete Successfully!"});
   }
   catch(err){
      return res.status(500).json(err);
   }
 }
 else{
    return res.status(400).json("Access Denied!!");
 }
});

//GET

router.get("/find/:id",verify, async(req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id);
        return res.status(200).json(movie);
    }
    catch(err){
        return res.status(400).json(err);
    }
})

router.get("/genre", async(req,res)=>{
    try{
        const movie = await Movie.find({"isSeries" :"true"});
        const resp = movie.map((m)=>{
            return m._id;
        })
        return res.status(200).json(resp);
    }
    catch(err){
        return res.status(400).json(err);
    }
})


//GET RANDOM

router.get("/random", verify,async(req,res)=>{
        const type = req.query.type;
        let movie;
        try{
           if(type === "series"){
              movie = await Movie.aggregate([
                  {$match:{isSeries:true}},
                  {$sample:{size:1}}
              ])
           }
           else{
                  movie = await Movie.aggregate([
                      {$match:{isSeries:false}},
                      {$sample:{size:1}}
                  ])
           }
           res.status(200).json(movie);
         }
         catch(err){
            return res.status(500).json(err);
         }
 });

 //GET ALL
 router.get("/",verify,async(req,res)=>{
    if(req.user.isAdmin){
       try{
          const movies = await Movie.find();
          return res.status(200).json(movies);
       }
       catch(err){
           return res.status(500).json(err);
       }
     }
     else{
         return res.status(403).json({message:"Access Denied !!"});
     }
 });

module.exports = router;