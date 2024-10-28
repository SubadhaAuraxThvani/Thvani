import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const user = process.env.mongo_user;
const password = process.env.mongo_pass;

async function connectDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@cluster0.g1upd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Mongo DB Connected");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
