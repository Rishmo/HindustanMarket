const mongoose =require('mongoose')

const OrderSchema=new mongoose.Schema({
   
    products:[
        {
            type:mongoose.ObjectId,
            ref:'products',
        },
    ],
    payment:{},
    buyer:{
        type:mongoose.ObjectId,
        ref:'users',
    },
    status:{
        type:String,
        default:'Not Process',
        enum: ["Not Process","Processing","Shipped","Delivered","cancel"],
    },
},{timestamps:true}
)

module.exports=mongoose.model('Order' ,OrderSchema);