import validateFunc from "../middlewares/validate.js";
import UserController from "../controllers/user.js";
import { authorizationFunc } from "../middlewares/authentication.js";
import express from "express";
import userValidationSchema from "../validations/user.js";
const router = express.Router();

// router.post('/signup',UserController.registerUser);
router.post("/signup", validateFunc(userValidationSchema), UserController.registerUser);
router.post("/login", UserController.loginUser);
router.get("/refresh", UserController.refreshToken);
router.get("/addbasket/:id", authorizationFunc, UserController.addBasket);
router.get("/addfavorite/:id", authorizationFunc, UserController.addFavorites);
router.get("/", authorizationFunc, UserController.getUsers);

export default router;
