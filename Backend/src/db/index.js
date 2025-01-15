import mongoose from 'mongoose'


export const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDb connection successful::",connectionInstance.connection.name)
    } catch (error) {
        console.log("Error in connectDB::",error)
    }
}