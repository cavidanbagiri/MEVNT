
import AppError from "../exceptions/AppError.js";

const errorHandler = (err, req, res, next) => {

    if(err instanceof AppError){
        return res.status(err.statusCode).send({ "Global Handling Fetch Error ": err.message });
    }

    return res.status(400).send({ "Global Fetch Error ": err.message });
};



export default errorHandler;