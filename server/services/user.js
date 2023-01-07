
import User from '../models/user.js';
import UserToken from '../models/token_schema.js';
import ProductSchema from '../models/products.js';
import mongoose from 'mongoose';

class TokenService{
    static async createRefreshToken(user, access_token){
        console.log('register token : ',access_token);
        const token = new UserToken({
            user:user,
            refresh_token:access_token
        });
        token.save()
    }
    static async saveRefreshToken(user, refresh_token){
        const token_data = await UserToken.findOne({user:user._id});
        if(token_data){
            token_data.refresh_token = refresh_token;
            return token_data.save();
        }
    }
    static async findToken(refresh_token){
        const token_data = await UserToken.findOne({refresh_token});
        console.log('token data : ',token_data.user);
        return token_data.user;
    }
}

class UserServices{

    //Register User
    static async registerUser(user_data,access_token){
        const current_user = await new User(user_data);
        TokenService.createRefreshToken(current_user, access_token);
        current_user.save();
    }

    //Login User
    static async loginUser(user_data, refresh_token){
        const current_user = await User.findOne(user_data);
        if(current_user){
            await TokenService.saveRefreshToken(current_user,refresh_token)
        }
        return current_user;
    }

    //Find User By Id
    static async findUserById(user_id){
        const finding_user = await User.findById(user_id);
        return finding_user; 
    }

    //Add Product to
    static async addBasket(product_id, user_email){
        const product = await ProductSchema.findById(mongoose.Types.ObjectId(product_id));
        const user = await User.findOne({
            email:user_email
        });
        await user.basket.push(product);
        user.save();
        console.log('user from service : ',user);
        return user;
    }
    //Add Product to
    static async addFavorites(product_id, user_email){
        const product = await ProductSchema.findById(mongoose.Types.ObjectId(product_id));
        const user = await User.findOne({
            email:user_email
        });
        await user.favorites.push(product);
        return user.save();
    }

}


export {UserServices,TokenService};