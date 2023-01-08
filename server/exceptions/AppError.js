class AppError extends Error {
  constructor (message, statusCode, errorCode = []) {
    super(message);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }

  static BadRequest (message, statusCode, errorCode = []) {
    return new AppError(message, statusCode);
  }
}

export default AppError;
