import pkg from "jsonwebtoken";
const { verify } = pkg;

const authorizationFunc = (req, res, next) => {
  const token = req?.headers.authorization?.split(" ")[1];
  console.log("token is from : ", token);
  if (!token) {
    console.log("User Not Log In");
    res.status(403).send("JWT Error Not Token");
  }
  verify(token, "generate", (err, user) => {
    if (err) {
      console.log("JWT Cant Work : ", err);
      return res.status(401).json({ "JWT Error : ": err });
    }
    // write user to req.user
    req.user = user;
    next();
  });
};

const bodyreq = (req, res, next) => {
  // console.log("body reqs : ", req.headers.authorization);
  const token = req?.headers.authorization?.split(" ")[1];
  console.log("token is from : ", token);
  if (!token) {
    console.log("User Not Log In");
    res.status(403).send("JWT Error Not Token");
  }
  verify(token, "generate", (err, user) => {
    if (err) {
      console.log("JWT Cant Work : ", err);
      return res.status(401).json({ "JWT Error : ": err });
    }
    // write user to req.user
    req.user = user;
    next();
  });
};

export { authorizationFunc, bodyreq };
