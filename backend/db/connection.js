import mongoose from "mongoose"
const connectDB=async () => {
    try {
     await   mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
     console.log("mongodb connected");
     
    } catch (error) {
        console.log(error.message)
    }
}
export default connectDB

