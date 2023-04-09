import mongoose from "mongoose";
import Colors from "colors";

const connectDB = async () => {
    try {
        // console.log('trying to connect')
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongoDB database ${conn.connection.host}`.bgMagenta)
    } catch (error) {
        console.log(`Error in mongoDB ${error}`.bgRed.white)
    }
}

export default connectDB;