import { UserServices, TokenService } from "../services/user.js";

import pkg from "jsonwebtoken";
const { verify } = pkg;

const pl = ["c", "c#", "c++", "java", "python"];

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
      //Send First Token After First Registration and send sevice for saving tokenschema
      const access_token = await generateToken(user);
      await UserServices.registerUser(user, access_token)
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
      const access_token = await generateToken(user);
      const refresh_token = await resfreshToken(user);
      await UserServices.loginUser(user, refresh_token)
        .then(async (respond) => {
          res.cookie("refreshToken", refresh_token, {
            maxAge: 24 * 60 * 60 * 1000,
          });
          res.json({ token: access_token, user: respond });
        })
        .catch((err) => console.log("User Cant Login : ", err));
    } catch (err) {
      console.log("User Login Error : ", err);
    }
  }
  //Get New Access Token and As The Key User Refresh Token, when log in refresh token will be change.
  static async refreshToken(req, res) {
    console.log("refresh work");
    //Take refresh tpoken from cookies
    const { refreshToken } = req.cookies;
    // console.log('object : ',req.cookies);
    console.log("ref cookies : ", refreshToken);
    //Find User_id From Token Model with req.cookies's refresh_token
    const user_id = await TokenService.findToken(refreshToken);
    //Find User From User Model
    const user_data = await UserServices.findUserById(user_id);
    console.log("user data : ", user_data);
    if (refreshToken) {
      verify(refreshToken, "refresh", async (err, user) => {
        if (err) {
          res.send("Jwt Refresh Can Find : ", err);
        }
        const access_token = await generateToken(user);
        res.json({ token: access_token });
      });
    }
  }
  static async addBasket(req, res) {
    const product_id = req.params.id;
    console.log("product id is : ", product_id);
    try {
      //Before Adding basket, firstly take refreshToken from req.headers.cookies;
      //const {refreshToken} = req.cookies;
      //Find User with this token
      //const user_id = await TokenService.findToken(refreshToken);
      //Find User By Id
      //const user_data = await UserServices.findUserById(user_id);
      console.log('user ',req.user);
      await UserServices.addBasket(product_id, req.user.data.email)
        .then((respond) => {
          res.send(respond.data);
        })
        .catch((err) => {
          console.log("Adding Product Error : ", err);
        });
    } catch (err) {
      throw new Error(err);
    }
  }

  static async addFavorites(req, res) {
    const product_id = req.params.id;
    try {
      //Before Adding basket, firstly take refreshToken from req.headers.cookies;
      //const {refreshToken} = req.cookies;
      //Find User with this token
      //const user_id = await TokenService.findToken(refreshToken);
      //Find User By Id
      //const user_data = await UserServices.findUserById(user_id);
      console.log('user ',req.user);
      await UserServices.addFavorites(product_id, req.user.data.email)
        .then((respond) => {
          res.send(respond.data);
        })
        .catch((err) => {
          console.log("Adding Product Error : ", err);
        });
    } catch (err) {
      throw new Error(err);
    }
  }

  //Get Users Lists If Token Valid
  static async getUsers(req, res) {
    res.send(pl);
  }
}

export default UserController;
