
import mongoose, { mongo } from "mongoose";


const categorySchema = new mongoose.Schema({
    category:{type:String,required:true},
})

const CategorySchema = new mongoose.model("categories", categorySchema);
