const mongoose= require('mongoose');

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        require:[true,"please enter product name"]
    },
  description:{
        type:String,
        require:[true,"please enter description "]
    },
    price:{
        type:Number,
        require:[true,"please enter product price"],
        maxlength:[8,'price cannot excees over 8 character']
    },
//    rating:{
//         type:Number,
       
//     },
    image:{
       type:String

    },
    quantity:
    {
        type:String
    },


        category:{
         type:String
        },
       stock:{
            type:Number,
            require:[true,"please enter product stock"],
            maxlength:[4,"cannot exceed 4 character"]
        },
        // nofreview:{
        //     type:Number,
        //     default:0
        // },
        // reviews:[{
        //     name:{
        //         type:String,
        //         require:true
        //     },
        //     rating:{
        //         type:String,
        //         require:true
        //     },
        //     comment:{
        //         type:String,
        //         require:true
        //     },
        // }],
        // createdAt:
        // {
        //     type:Date,
        //     default:Date.now
        // }
})

const ProductData=new mongoose.model('productdata',productSchema);
module.exports=ProductData;