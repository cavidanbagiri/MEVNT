import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  category_name: { type: String, required: true, unique: true }
});

// eslint-disable-next-line new-cap
const CategorySchema = new mongoose.model("categories", categorySchema);

export default CategorySchema;
