const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, "please enter your name"],
        maxlength:[30,"cannot exceed 30 character"],
        minlength:[4,"name should be more than 4 characetr"]
    },
    email:{
        type:String,
        require:[true, "please enter your email"],
        unique:true,
        validate:[validator.isEmail, "please enter valid email"]
    },
    
    password:
    {
        type:String,
        require:[true,"please enter your password"],
        minlength:[8,"password should be greater than 8 character"],
        select:false,   
    },
    avatar:{
        puglic_id:{
            type:String,
            require:true
        },
        url:
        {
            type:String,
            require:true
        }
    },
    role:{
        type:String,
        default:"user",
        enum:["admin","user"]

    },
    resetpasswordToke:String,
    resetPasswordExpire:Date,
});
// password hashing

userSchema.pre('save', async function ()
{
    if(!this.isModified('password'))
    {
        next();
    }
    this.password= await bcrypt.hash(this.password,10);
    console.log(`from usermodel ${this.password}`)
});

// // password comapare
userSchema.methods.comparePassword = async function (enterdPassword)
{
    return await bcrypt.compare(enterdPassword, this.password);
}
//jwn token
// userSchema.methods.getJWTToken = function ()
// {
//     return jwt.sign({id:this._id},hdfusdhf,
//         {
//             expiresIn:"5 days",
//         });
// }

const UserDetail = new mongoose.model('userDetail', userSchema);
module.exports= UserDetail;