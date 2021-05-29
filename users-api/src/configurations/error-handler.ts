import { ValidationError } from 'express-validation'
import { CustomException } from '../exceptions/custom-exceptions';

export default function (app) {

  app.use(function (err, req, res, next) {

    //Get errors from 'express-validation'
    if (err instanceof ValidationError) {
      console.log("Error is ValidationError");

      const errors = err.details.body?.map(e => { return { 'message': e.message} });

      return res.status(err.statusCode).json({errors})
    }

    //Using CustomException to customize responses
    if (err instanceof CustomException) {
      console.log("Error is CustomException");
      return res.status(err.status).json({
        status: err.status || 400,
        message: err.message,
      })
    }

    //Generate generic error message in case of errors
    if (err) {
      console.log("🚀 error-handler ~ err", err)
      return res.status(err.status || 500).send({
        error: {
          status: err.status || 500,
          message: 'Internal Server Error',
        },
      });
    }
    console.log("Error is 404");

    return res.status(404).send({
      status: 404,
      error: 'Not found'
    });
  });

}

