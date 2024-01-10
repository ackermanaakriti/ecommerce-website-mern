const mongoose = require('mongoose');

const URI ='mongodb://localhost:27017/Oasis'

const dbConnect= async()=>
{
     try 
     {
       await mongoose.connect(URI);
       console.log("connected with database")
     } 
     catch{
        console.error('fail to connect with database')
     }
}


module.exports= dbConnect;