import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    favorites: {
      type: [mongoose.Types.ObjectId],
      default: []
    },
    basket: {
      type: [mongoose.Types.ObjectId],
      default: []
    },
    orders: {
      type: [mongoose.Types.ObjectId],
      default: []
    },
    coupons: {
      type: [],
      default: []
    },
    refund: {
      type: [mongoose.Types.ObjectId],
      default: []
    },
    cards: {
      type: [],
      default: []
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    profile_image: {
      type: String
    }
  },
  { timestamps: true }
);

// eslint-disable-next-line new-cap
const User = new mongoose.model('users', userSchema);

export default User;
