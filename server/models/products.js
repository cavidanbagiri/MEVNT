
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

      Model: {type:String,required:true},
      Brand: {type:String,required:true},
      Thumbnail: {type:String,default:''},
      Price:{type:Number,required:true},
      Discount:{type:Number},
      Point:{type:Number},
      Colors: {type: [String],default:[]},

},{timestamps:true});

const ProductSchema = new mongoose.model('products',productSchema)

export default ProductSchema;

