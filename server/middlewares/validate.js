
import Joi from 'joi';

const validateFunc = (schema) => (req, res, next) => {
    const data = req.body;
    console.log('data from body : ',data);
    const {value, error} = schema.validate(data);

    if(error){
        // const errorMessage = error.details?.map((detail)=>{detail}).join(",")
        const errorMessage = error.details.map((detail)=>detail.message).join(", ")
        console.log(errorMessage);
        res.status(400).json({error:errorMessage});
        return;
    }

    next();
} 


export default validateFunc;
