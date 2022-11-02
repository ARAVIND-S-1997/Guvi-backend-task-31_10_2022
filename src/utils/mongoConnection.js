import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const mongooseConnection = () => {
    try {
        const db = mongoose.connect(process.env.DB);
        console.log('DB is connected')
    } catch (err) {
        console.log('err in mongoose connection')
    }
}