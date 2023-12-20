import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbUrl = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${dbUrl}/${DB_NAME}`);

    console.log(
      `\n Mongodb connects succefully !! on Host : ${conn.connection.host} `
    );
    // console.log(conn.connection);
  } catch (error) {
    console.log(`MongoDB connection failed. ERROR : ${error}`);
    process.exit(1);
  }
};

export default connectDB;
