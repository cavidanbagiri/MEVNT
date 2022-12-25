import UserServices from "../services/user.js";
import {
  hashPassword,
  generateToken,
  resfreshToken,
} from "../scripts/helpers.js";

//Import NOde Mailer
import nodemailer from "nodemailer";

class UserController {
  //Register User
  static async registerUser(req, res) {
    try {
      
      const user = req.body;
      user.password = await hashPassword(user.password);
      await UserServices.registerUser(user)
        .then((respond) => {
          res.send(respond);
        })
        .catch((err) => console.log("User Cant Create : ", err));
    } catch (err) {
      console.log("User Registration Error : ", err);
    }
  }
  //Login User
  static async loginUser(req, res) {
    try {
      const user = req.body;
      user.password = await hashPassword(user.password);
      await UserServices.loginUser(user)
        .then(async (respond) => {
          const access_token = await generateToken(respond);
          const refresh_token = await resfreshToken(respond);
          res.cookie("token", access_token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
          });
          res.json({ token: access_token, user: respond });
        })
        .catch((err) => console.log("User Cant Login : ", err));
    } catch (err) {
      console.log("User Login Error : ", err);
    }
  }
}

export default UserController;
