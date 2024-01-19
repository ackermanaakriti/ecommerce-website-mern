const jwt = require ('jsonwebtoken');

const UserDetail = require('../models/usermodel');


const authenticateToken = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ error:"Unauthorized: token Missing"});
  }
  
    try {
      const decoded = jwt.verify(token, 'heloakri');   
      const { username } = decoded;
  
      const userFromDatabase = await UserDetail.findOne(username);
  
      if (!userFromDatabase) {
        return res.status(401).json({ message: "Unauthorized: User does not exist" });
       }
      req.user = userFromDatabase;
      next();
    } catch (error) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
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
