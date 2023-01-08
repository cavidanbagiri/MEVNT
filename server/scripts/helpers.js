import CryptoJS from "crypto-js";
import pkg from "jsonwebtoken";
const { sign } = pkg;

const hashPassword = async (data) => {
  const hashingPassword = CryptoJS.SHA256(data, "1234").toString();
  return hashingPassword;
};

const generateToken = async (data) => {
  const token = sign({ data }, "generate", { expiresIn: "1h" });
  return token;
};

const resfreshToken = async (data) => {
  const token = sign({ data }, "refresh", { expiresIn: "60m" });
  return token;
};

export { hashPassword, generateToken, resfreshToken };
