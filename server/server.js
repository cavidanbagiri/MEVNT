
import express from 'express'; 
const app = express();
import cookieParser from 'cookie-parser';
//Dotenv and DB Loaders
import './config/index.js';
import './loaders/db.js';
import cors from 'cors';


//Import Routers
import {UserRouter} from './routes/index.js';

//User Express Json
app.use(express.json());
//Use CookieParser
app.use(cookieParser());
//Use Cors
app.use(cors(
    {origin:'http://localhost:5174'}
));                                                             

//Get Routers
app.use('/user',UserRouter);                             


app.listen(3000,()=>{
    console.log('listening');
})