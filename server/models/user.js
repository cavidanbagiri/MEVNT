
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
    favorites:{
        type: [],
        default :[]
    },
    basket:{
        type: [],
        default :[]
    },
    orders:{
        type: [],
        default :[]
    },
    coupons:{
        type: [],
        default :[]
    },
    refund:{
        type: [],
        default :[]
    },
    cards:{
        type: [],
        default :[]
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