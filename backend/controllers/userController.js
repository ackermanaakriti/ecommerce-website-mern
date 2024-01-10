const UserDetail = require('../models/usermodel');
const userDetail = require('../models/usermodel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// register
const RegisterUser=async (req,res)=>

{
   
const {name,email,password}= req.body;

const userExists= await userDetail.findOne({email});
if(userExists)
{
    res.status(400)
     Error('user already exist')
}
const token = jwt.sign({ userId: userExists }, 'heloakri', { expiresIn: '6h' });
// const saltRounds = 10;
// const salt = await bcrypt.genSalt(saltRounds);

// // Hash the password with the generated salt
// const hashedPassword = await bcrypt.hash(password, salt);

// // Save the user with the hashed password in the database
// const user = new User({ username, password: hashedPassword });
const user = await userDetail.create(
    {
        name,email,password,avatar:{
            public_id:"this is a sample id",
            url:"proficelurl"
        } 
    } 
)

res.status(201).json({user,token})
}


// login

const logIn = async(req,res)=>
{
   
    const {email,password}= req.body;
    console.log(password)
   
    try{ 
    const logInUser= await UserDetail.findOne({email});
    if(!logInUser)
    {
        return res.status(400).json({msg:"invalid username"}) 
    }
    console.log(logInUser)
    const token = jwt.sign({ userId: logInUser._id }, 'heloakri', { expiresIn: '6h' });

    // const userpassword= await logInUser.comparePassword(password);
    // if(userpassword)
    // {
    //     res.json({token,msg:"login successfull"})
    // }
    // else{
    //     res.json("invalid pass")
    // }

    // password compare 
    
    // const isPasswordValid = await bcrypt.compare(password, logInUser.password);

    // if (isPasswordValid) {
    //   res.json({ msg: 'Login successful' });
    // } else {
    //   res.status(401).json({ error: 'Invalid credentials' });
    // }
    res.json({token,msg:"login successfull"})

  }
   
   catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal Server Error' });
}
}

const testcontroller =async (req,res)=>
{
try{
       res.json('protected route')
}
catch(error)
{
   console.log(error)
}
}

module.exports= {RegisterUser,logIn,testcontroller};