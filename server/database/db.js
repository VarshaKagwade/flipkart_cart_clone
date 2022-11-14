import mongoose from "mongoose";
export const Connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/flipkart", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("error while connection", error.message);
  }
};
export default Connection;
