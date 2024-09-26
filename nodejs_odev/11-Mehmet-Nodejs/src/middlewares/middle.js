const jwt = require('jsonwebtoken');

const auth =(req,res,next)=>{
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.status(403).send({message:'No token data'})
    const token =authHeader && authHeader.split(' ')[1];
    jwt.verify(token,process.env.TOKEN_SECRET),(err,data)=>{
        if(err){
            return res.status(403).send({message:'unauthorıon',error:err})
        }
    }
next();
}

module.exports=auth;