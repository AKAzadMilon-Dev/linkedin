import mongoose from "mongoose";

const dbconnect = ()=>{
    mongoose.connect(process.env.MONGODB_URI, ()=>{
        console.log("DB Connected")
    })
}

export default dbconnect