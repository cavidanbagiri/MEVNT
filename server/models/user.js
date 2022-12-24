
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmed:{
        type:Boolean,
        default: false
    },
    isAdmin:{
        type:Boolean,
        default: false
    },
    profile_image:{
        type:String,
    }

},{timestamps:true})


const User = new mongoose.model('users',userSchema);

export default User;