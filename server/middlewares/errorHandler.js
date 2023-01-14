import AppError from "../exceptions/AppError.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .send(err.message);
  }

  return res.status(400).send(err.message);
};

export default errorHandler;
