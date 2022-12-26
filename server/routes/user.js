
import express from 'express';
const router = express.Router();
import UserController from '../controllers/user.js';
import { authorizationFunc } from '../middlewares/authentication.js';



router.post('/signup',UserController.registerUser);
router.post('/login',UserController.loginUser);
router.get('/refresh', UserController.refreshToken);
router.get('/', authorizationFunc ,UserController.getUsers)
// router.get('/', UserController.getUsers)

export default router;