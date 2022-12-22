
import express from 'express';
const router = express.Router();
import UserController from '../controllers/user.js';
import { authorizationFunc } from '../middlewares/authentication.js';

const pl = ['c','c#','c++','java','python'];

router.post('/signup',UserController.registerUser);
router.post('/login',UserController.loginUser);
router.get('/', authorizationFunc ,(req, res)=>{
    res.send(pl);
})

export default router;