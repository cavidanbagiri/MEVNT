
import express from 'express'; 
const app = express();

//Dotenv and DB Loaders
import './config/index.js';
import './loaders/db.js';


//Import Routers
import {UserRouter} from './routes/index.js';

//User Express Json
app.use(express.json());


//Get Routers
app.use('/user',UserRouter);


app.listen(3000,()=>{
    console.log('listening');
})