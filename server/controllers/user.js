// import { UserServices, TokenService } from '../services/user.js';
import { UserServices } from "../services/user.js";
import tryCatch from "../utils/tryCatch.js";
// import AppError from '../exceptions/AppError.js';

import pkg from "jsonwebtoken";

import {
  hashPassword,
  generateToken,
  resfreshToken
} from "../scripts/helpers.js";
const { verify } = pkg;

const pl = ["c", "c#", "c++", "java", "python"];

class UserController {
  // Register User
  static async registerUser (req, res, next) {
    const user = req.body;
    user.password = await hashPassword(user.password);
    // Send First Token After First Registration and send sevice for saving tokenschema
    const accessToken = await generateToken(user);
    tryCatch(
      await UserServices.registerUser(user, accessToken)
        .then((respond) => {
          res.send(respond);
        })
        .catch((err) => {
          next(err);
        })
    );
    // try {
    //   const user = req.body;
    //   user.password = await hashPassword(user.password);
    //   //Send First Token After First Registration and send sevice for saving tokenschema
    //   const access_token = await generateToken(user);
    //   await UserServices.registerUser(user, access_token)
    //     .then((respond) => {
    //       res.send(respond);
    //     })
    //     .catch((err) => console.log('User Cant Create : ', err));
    // } catch (err) {
    //   console.log('User Registration Error : ', err);
    // }
  }

  //  Login User
  static async loginUser (req, res, next) {
    const user = req.body;
    user.password = await hashPassword(user.password);
    const accessToken = await generateToken(user);
    const refreshToken = await resfreshToken(user);
    tryCatch(
      await UserServices.loginUser(user, refreshToken)
        .then(async (respond) => {
          res.cookie("refreshToken", refreshToken, {
            maxAge: 24 * 60 * 60 * 1000
          });
          res.json({ token: accessToken, user: respond });
        })
        .catch((err) => next(err))
    );

    // try {
    //   const user = req.body;
    //   user.password = await hashPassword(user.password);
    //   const access_token = await generateToken(user);
    //   const refresh_token = await resfreshToken(user);
    //   await UserServices.loginUser(user, refresh_token)
    //     .then(async (respond) => {
    //       res.cookie('refreshToken', refresh_token, {
    //         maxAge: 24 * 60 * 60 * 1000,
    //       });
    //       res.json({ token: access_token, user: respond });
    //     })
    //     .catch((err) => console.log('User Cant Login : ', err));
    // } catch (err) {
    //   console.log('User Login Error : ', err);
    // }
  }

  // Add Profile Image
  static async addProfileImage (req, res, next) {
    const file = req.file;
    const userEmail = req.user.data.email;
    const imageType = {
      "image/png": ".png",
      "image/jpg": ".jpg",
      "image/jpeg": ".jpeg"
    };
    const fileName = userEmail + imageType[file.mimetype];
    UserServices.addProfileImage(fileName, userEmail)
      .then((respond) => {
        res.send("Image Can Uploaded");
      })
      .catch((err) => {
        throw new Error("Image Can Uploaded : ", err);
      });
  }

  // Get New Access Token and As The Key User Refresh Token, when log in refresh token will be change.
  static async refreshToken (req, res) {
    // Take refresh tpoken from cookies
    const { refreshToken } = req.cookies;
    // console.log('object : ',req.cookies);
    // Find User_id From Token Model with req.cookies's refresh_token
    // const userId = await TokenService.findToken(refreshToken);
    // Find User From User Model
    // const userData = await UserServices.findUserById(userId);
    if (refreshToken) {
      verify(refreshToken, "refresh", async (err, user) => {
        if (err) {
          res.send("Jwt Refresh Can Find : ", err);
        }
        const accessToken = await generateToken(user);
        res.json({ token: accessToken });
      });
    }
  }

  static async addBasket (req, res, next) {
    const productId = req.params.id;
    tryCatch(
      await UserServices.addBasket(productId, req.user.data.email)
        .then((respond) => {
          res.send(respond);
        })
        .catch((err) => {
          next(err);
        })
    );
  }

  static async addFavorites (req, res, next) {
    const productId = req.params.id;
    tryCatch(
      await UserServices.addFavorites(productId, req.user.data.email)
        .then((respond) => {
          res.send(respond);
        })
        .catch((err) => {
          next(err);
        })
    );
  }

  //  Get Users Lists If Token Valid
  static async getUsers (req, res) {
    res.send(pl);
  }
}

export default UserController;
