
import express from 'express'; 
const app = express();

//Dotenv and DB Loaders
import './config/index.js';
import './loaders/db.js';
import cors from 'cors';


//Import Routers
import {UserRouter} from './routes/index.js';

//User Express Json
app.use(express.json());

//Use Cors
app.use(cors());

//Get Routers
app.use('/user',UserRouter);


app.listen(3000,()=>{
    console.log('listening');
})