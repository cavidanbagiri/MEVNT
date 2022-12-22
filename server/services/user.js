
import User from'../models/user.js';

class UserServices{

    //Register User
    static async registerUser(user_data){
        const current_user = await new User(user_data);
        current_user.save();
    }

    //Login User
    static async loginUser(user_data){
        const current_user = await User.findOne(user_data);
        return current_user;
    }

}


export default UserServices;