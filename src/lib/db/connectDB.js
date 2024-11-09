import mongoose from "mongoose";



export async function  connectDB(){
    try {
        let connection = await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB connected")
    } catch (error) {
        console.log("Error in Connecting MongoDB to code",error)
    }
}