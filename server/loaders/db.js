import mongoose from "mongoose";

(async function createConnection () {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(`mongodb://${process.env.DB_HOSTNAME}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
    .then(() => {
      console.log("Connection Created");
    })
    .catch((err) => {
      console.log("Err Happened");
    });
})();


