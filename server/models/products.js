import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    CategoryId: { type: mongoose.Types.ObjectId, ref: 'categories' },
    ProductId: { type: mongoose.Types.ObjectId, ref: 'phones' },
    Model: { type: String, required: true },
    Brand: { type: String, required: true },
    Thumbnail: { type: String, default: '' },
    Price: { type: Number, required: true },
    Discount: { type: Number },
    Point: { type: Number }
  },
  { timestamps: true }
);

// eslint-disable-next-line new-cap
const ProductSchema = new mongoose.model('products', productSchema);

export default ProductSchema;
