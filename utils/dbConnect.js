// utils/dbConnect.js
import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect("mongodb://localhost:27017/donate-coupons", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 15000, // Increase timeout to 15 seconds
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("MongoDB connected locally on port 27017");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw new Error("Database connection error");
  }
}

export default dbConnect;
