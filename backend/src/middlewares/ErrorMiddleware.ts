import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const { status = 500, message = "Some error occurred..!" } = err;
  res.status(status).send(message);
};
