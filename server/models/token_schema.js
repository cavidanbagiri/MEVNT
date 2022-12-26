

import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({

    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    refresh_token : {
        type:String,
        required: true
    }

},{timestamps:true})


const UserToken = new mongoose.model('tokens',tokenSchema);

export default UserToken;
