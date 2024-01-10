const JWT = require ('jsonwebtoken');
const UserDetail = require('../models/usermodel');


const authenticateToken = (req, res, next) => {
   try 
   {
    const decode = JWT.verify(
        req.headers.authorization,'heloakri'
    );
    req.user=decode;
    next();
   }
   catch(err)
   {
    console.log(err)
   }
  };

  const isAdmin= async(req,res,next)=>
  {
    try 
    {
       const user= await UserDetail.findById(req.user._id);
       console.log(user)
       if(user.role ==='admin')
       {
        res.json("unauthorizes access")
       }
       else{
        next()
       }
    }
    catch(err)
    {
console.log(err)
    }
  }


module.exports={authenticateToken,isAdmin};
