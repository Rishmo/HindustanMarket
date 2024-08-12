const User =require("../models/User")
const Order=require( "../models/Order")
const {hashPassword, comparePassword}  =require("../utils/authutils")
const jwt =require('jsonwebtoken')

const registerController = async(req, res ) => {
try{
    const {name , email , password , phone , address,answer}=req.body
    if(!name){
        return res.send({error:'Name is Required'})
    }
    if(!email){
        return res.send({error:'Email is Required'})
    } 
    if(!password){
        return res.send({error:'Password is Required'})
    }
    if(!phone){
        return res.send({error:'Phone No. is Required'})
    }

    if(!address){
        return res.send({error:'Address is Required'})
    }
    if(!answer){
        return res.send({error:'Answer is Required'})
    }

    //Check user
    const existingUser =await User.findOne({email})

    //existing user
    if(existingUser){
        return res.status(200).send({
            success:false,
            message:'Already Registered please Login'
        })
    }

    // register user

    const hashedPassword=await hashPassword(password);

    //save
    const user = await new User({
        name,email,phone,address,answer,
        password:hashedPassword})
        .save()
    res.status(201).send({
        success:true,
        message:"User Register Successfully",
        user,
    })
}
catch(err){
    console.log(err);
    res.status(500).send({
        success:false,
        message:'Error in Registration',
        err
    })

}
};


const loginController =async(req, res)=>{

    try {
        const {email , password} =req.body

        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"Invalid Credentials",

            })
        }
        //check user
        const user =await User.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registered"
             } )}

        const match = await comparePassword(password,user.password)
             if(!match){
                return res.status(200).send({
                   success:false,
                   message:"Invalid Password" 
                })
             }
             //Token
             const token =await jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
             res.status(200).send({
                success:true,
                message:"Login Successfully",
                user:{
                    name:user.name,
                    email:user.email,
                    phone:user.phone,
                    address:user.address,
                    role:user.role,
                },
                token,
             })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Login',
            error
        })
    }
}


//Forgot Password Controller

const forgotPasswordController=async(req, res)=>{
try {
    const {email , answer, newPassword} =req.body
    if(!email){
        res.status(400).send({message:'Email is required'})
    }
    if(!answer){
        res.status(400).send({message:'Answer is required'})
    }
    if(!newPassword){
        res.status(400).send({message:'New Password is required'})
    }

    const user = await User.findOne({email,answer})
    //validation
    if(!user){
        return res.status(400).send({
            success:false,
            message:'Invalid Email or Answer'
        })
    }

    const hashed =await hashPassword(newPassword)
    await User.findByIdAndUpdate(user._id,{password:hashed});
    res.status(200).send({
        success:true,
        message:"Password Reset Successfully",
    });

} catch (error) {
    console.log(error);
    res.send({
        success:false,
        message:'Something went Wrong',
        error
    })
}

}







//test controller

const testController =(req,res)=>{
    res.send("Protected Route");
};


const updateProfileController =async(req, res)=>{
    try {
        const {name , email , password , address , phone} =req.body;
        const user =await User.findById(req.user._id);

        if(password && password.length<6){
            return res.status(400).send({message:'Password length must be 6 '});
        }
        const hashedPassword =password ? await hashPassword(password):undefined;
        const updatedUser=await User.findByIdAndUpdate(
            req.user._id,
            {
                name:name||user.name,
                password:hashedPassword || user.password,
                phone:phone||user.phone,
                address:address||user.address,
            },{new:true})
            res.status(200).send({
                success:true,
                message:"Profile Updated Successfully",
                updatedUser
            })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success:false,
            message:"Error while Update Profile",
            error

        })
        
    }
}


const getOrdersController = async(req, res)=>{

    try {
        const orders =await Order.find({buyer:req.user._id})
        .populate("products","-photo")
        .populate("buyer","name");
        res.json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error while getting Orders",
            error
        })
        
    }
}

const getAllOrdersController = async (req, res) => {
    try {
      const orders = await Order
        .find({})
        .populate("products", "-photo")
        .populate("buyer", "name")
        .sort({ createdAt: "-1" });
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error WHile Geting Orders",
        error,
      });
    }
  };

//order status
 const orderStatusController = async (req, res) => {
    try {
      const { orderId } = req.params;
      const { status } = req.body;
      const orders = await Order.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
      );
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error While Updateing Order",
        error,
      });
    }
  };


module.exports ={registerController , loginController,
    testController,forgotPasswordController,
    updateProfileController,getOrdersController,
    getAllOrdersController,orderStatusController};