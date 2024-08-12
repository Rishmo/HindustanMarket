const mongoose =require('mongoose')
const colors =require("colors")

const connectDB=async()=>{
    try {
     const conn=   await mongoose.connect(process.env.MONGO_URI)
     console.log(`Connected to MongoDB Database ${conn.connection.host}`.bgRed.black);
    }catch(err){
        console.log(`Error in MongoDB ${err}.bgRed.white`);
    }
}

module.exports= connectDB;
