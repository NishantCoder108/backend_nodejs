import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const app = express();

(async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDb connection successfully!! Connection: ${conn.connection.host}`
    );
  } catch (err) {
    console.log("Mongodb connection failed.", err);
    process.exit(1);
  }
})();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on Port ${process.env.PORT}`);
});
