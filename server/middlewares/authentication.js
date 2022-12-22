
import pkg from "jsonwebtoken";
const { verify } = pkg;

const authorizationFunc = (req, res, next) => {
    const token = req?.headers['authorization']?.split(' ')[1];
    if(!token){
        console.log('User Not Log In');
    }
    //Get Verify Token and user information
    const user = verify(token, "generate", (err, user)=>{
        if(err){
            console.log('JWT Cant Work : ',err);
        }
        //write user to req.user
        req.user = user;
        next();
    });
}

export {
    authorizationFunc
}