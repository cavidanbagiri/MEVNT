import validateFunc from "../middlewares/validate.js";
import UserController from "../controllers/user.js";
import { authorizationFunc } from "../middlewares/authentication.js";
import express from "express";
import userValidationSchema from "../validations/user.js";
import { upload } from "../utils/multer_service.js";
const router = express.Router();
router.post("/signup", validateFunc(userValidationSchema), UserController.registerUser);
router.post("/login", UserController.loginUser);
router.get("/refresh", UserController.refreshToken);
router.get("/addbasket/:id", authorizationFunc, UserController.addBasket);
router.get("/addfavorite/:id", authorizationFunc, UserController.addFavorites);
router.get("/", authorizationFunc, UserController.getUsers);
router.post("/settings/addprofileimage", authorizationFunc, upload.single("file"), (req, res, next) => {
  console.log(req.file);
});

export default router;
