const User = require('../models/Todos');
const jwt=require("jsonwebtoken")
const {registerSchema} = require('../helpers/validation_schema');



const register= async (req, res) => {  
    const  user =({isim,username,password,email,age,isMarried}=req.body);
       const {error} =await registerSchema.validate(user);
       if(error){ return res.status(400).send(error.details[0].message);}
  
    try {
        const data = await User.create(user); 
        res.status(201).json(data);
    } catch (error) {
        res.status(403).json({message:'error verdi'})
    }     
};

 
const login= async (req, res) => {
    const {surname,email,password}=req.body;  
   const data = await User.findOne({surname,email,password});
   
   if(!data){ return res.status(400).send('user not found');}
   if(data){
    const user ={
                 
           id:data._id,
           isim:data.isim,
           surname:data.surname,
           email:data.email,
           age:data.age,
           isMarried:data.isMarried,
    } 

 const accessToken = jwt.sign({user},process.env.TOKEN_SECRET)

    res.json({
        user:{
            token:accessToken,
           ...user
        }
    })

   
}
};
 


const find= async (req, res) => {
    const data = await User.findOne({_id:req.params.id});
    if(!data){ return res.status(400).send('user not found');
    }
    if(data){
        res.json({
            id:data._id,
            isim:data.isim,
            surname:data.surname,
            email:data.email,
            age:data.age,
            isMarried:data.isMarried,
    })
    }};

const findAll = async (req, res) => {
   try {
         const data = await User.find();
         res.json(data);
   } catch (error) {
       res.status(403).json({message:'error verdi'})
   } 
}


 const  romeve = async (req, res) => {
    const data = await User.deleteOne({_id:req.params.id});
    if(!data){ return res.status(400).send('user not found');
    }
    if(data){ res.json(data)
    }
}
        


    



module.exports = {
    register,
    login,
    find,
    findAll,
    romeve
};     
