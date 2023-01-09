import User from "../models/user.js";
import UserToken from "../models/token_schema.js";
import ProductSchema from "../models/products.js";
import mongoose from "mongoose";

class TokenService {
  static async createRefreshToken (user, accessToken) {
    const token = new UserToken({
    //   user: user,
      user,
      refresh_token: accessToken
    });
    token.save();
  }

  static async saveRefreshToken (user, refreshToken) {
    const tokenData = await UserToken.findOne({ user: user._id });
    if (tokenData) {
      tokenData.refresh_token = refreshToken;
      return tokenData.save();
    }
  }

  static async findToken (refreshToken) {
    const tokenData = await UserToken.findOne({ refresh_token: refreshToken });
    console.log("token data : ", tokenData.user);
    return tokenData.user;
  }
}

class UserServices {
  //  Register User
  static async registerUser (userData, accessToken) {
    const currentUser = await new User(userData);
    TokenService.createRefreshToken(currentUser, accessToken);
    currentUser.save();
  }

  //  Login User
  static async loginUser (userData, refreshToken) {
    const currentUser = await User.findOne(userData);
    if (currentUser) {
      await TokenService.saveRefreshToken(currentUser, refreshToken);
    }
    return currentUser;
  }

  //  Find User By Id
  static async findUserById (userId) {
    const findingUser = await User.findById(userId);
    return findingUser;
  }

  //  Add Product to
  static async addBasket (productId, userEmail) {
    const product = await ProductSchema.findById(
      mongoose.Types.ObjectId(productId)
    );
    const user = await User.findOne({
      email: userEmail
    });
    await user.basket.push(product);
    user.save();
    return user;
  }

  // Add Profile Image
  static async addProfileImage (filename, userEmail) {
    const user = await User.findOne({
      email: userEmail
    });
    user.profile_image = filename;
    user.save();
  }

  //  Add Product to
  static async addFavorites (productId, userEmail) {
    const product = await ProductSchema.findById(
      mongoose.Types.ObjectId(productId)
    );
    const user = await User.findOne({
      email: userEmail
    });
    await user.favorites.push(product);
    return user.save();
  }
}

export { UserServices, TokenService };
