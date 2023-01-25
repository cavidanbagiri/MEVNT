import mongoose from "mongoose";

(async function createConnection() {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(
      // `mongodb://${process.env.DB_HOSTNAME}:${process.env.DB_PORT}/${process.env.DB_NAME}`
      "mongodb+srv://cavidanbagiri:Initial_123@products.5ltfedp.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connection Created");
    })
    .catch((err) => {
      console.log("Err Happened");
      throw new Error(err);
    });
})();
