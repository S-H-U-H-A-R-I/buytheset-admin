import mongoose from "mongoose";

const mongooseConnect = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri = process.env.MONGODB_URI;
    try {
      return await mongoose.connect(uri);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1);
    }
  }
};

module.exports = mongooseConnect;
