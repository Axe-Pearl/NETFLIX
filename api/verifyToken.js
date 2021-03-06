const jwt = require("jsonwebtoken");

function verify(req,res,next){
    console.log(req.headers);
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader;
        // console.log("token - ",token);
        jwt.verify(token ,process.env.SECRET_KEY,(err,user)=>{
            if(err) res.status(403).json("Token is not valid!");
            // console.log("user",user);
            req.user = user;
            next();
        })
    }
    else{
        return res.status(401).json("You are not authenticated");
    }
}

module.exports = verify;