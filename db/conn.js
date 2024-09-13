import mongoose from "mongoose";
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI)
        console.log('mongoDB connected...')
    } catch (error) {
        console.log('Error connecting to mongoDB: ', error)
    }
}

export default connectDb