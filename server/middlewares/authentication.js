
import pkg from "jsonwebtoken";
const { verify } = pkg;

const authorizationFunc = (req, res, next) => {
    const token = req?.headers['authorization']?.split(' ')[1];
    // const token = req.cookies.token;
    // console.log(req.cookies.token);
    // console.log(res.cookies.token);
    // console.log('token : ',req);
    if(!token){
        console.log('User Not Log In');
        res.status(403).json({'JWT Error Not Token : ':err});
    }
    //Get Verify Token and user information

    const user = verify(token, "generate", (err, user)=>{
        if(err){
            console.log('JWT Cant Work : ',err);
            res.status(403).json({'JWT Error : ':err});
        }
        //write user to req.user
        req.user = user;
        next();
    });
}

export {
    authorizationFunc
}