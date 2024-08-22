const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
    // const customError = {
    //     statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    //     message: err.message || 'Something went wrong',
    // }
    
    // if(err.name == 'CastError'){
    //     customError.message = `There is an error in JobId: ${err.value}`
    // }
    // if(err.name === 'ValidationError'){
    //     customError.message = Object.values(err.errors)
    //     .map((item) => item.message)
    //     .join(',')
    //     customError.statusCode = 400
    // }
    // if(err.code && err.code === 11000){
    //     customError.message = `Duplicate value entered for ${err.errorResponse.keyValue.email}  field, choose another value`,
    //     customError.statusCode = 400
    // }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err})
    // return res.status(customError.statusCode).json({message: customError.message})
  
}

module.exports = errorHandlerMiddleware
