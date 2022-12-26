
import pkg from "jsonwebtoken";
const { verify } = pkg;

const authorizationFunc = (req, res, next) => {
    const token = req?.headers['authorization']?.split(' ')[1];
    if(!token){
        console.log('User Not Log In');
        res.status(403).json({'JWT Error Not Token : ':err});
    }
    const user = verify(token, "generate", (err, user)=>{
        if(err){
            console.log('JWT Cant Work : ',err);
            return res.status(401).json({'JWT Error : ':err});
        }
        //write user to req.user
        req.user = user;
        console.log('user is : ',req.user);
        next();
    });
}

export {
    authorizationFunc
}