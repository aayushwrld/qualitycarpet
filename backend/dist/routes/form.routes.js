"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const form_controller_1 = require("../controllers/form.controller");
const ErrorMiddleware_1 = require("../middlewares/ErrorMiddleware");
const formControl = express_1.default.Router();
formControl.use(express_1.default.json());
formControl.post("/new", form_controller_1.newEntry);
formControl.use(ErrorMiddleware_1.errorHandler);
exports.default = formControl;
