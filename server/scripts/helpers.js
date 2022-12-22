import CryptoJS from "crypto-js";
import pkg from "jsonwebtoken";
const { sign, verify } = pkg;

const hashPassword = async (data) => {
  const hashing_password = CryptoJS.SHA256(data, "1234", ).toString();
  return hashing_password;
};

const generateToken = async (data) => {
  const token = sign({ data }, "generate",{expiresIn:'15s'});
  return token;
};

const resfreshToken = async (data) => {
    const token = sign({ data }, "refresh",{expiresIn:'15s'});
    return token;
  };

export { 
    hashPassword,
    generateToken,
    resfreshToken
};
