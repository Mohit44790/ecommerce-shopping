import mongoose from "mongoose";

const ConnectDB = async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected Successfully");
    } catch (error) {
        console.log(error)
        
    }
}

export default ConnectDB;