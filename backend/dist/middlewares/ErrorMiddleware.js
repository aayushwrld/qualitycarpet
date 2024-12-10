"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    const { status = 500, message = "Some error occurred..!" } = err;
    res.status(status).send(message);
};
exports.errorHandler = errorHandler;
