"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const formSchema = new mongoose_1.default.Schema({
    work: {
        type: Boolean,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    reliability: {
        type: Number,
        required: true,
    },
    quality: {
        type: Number,
        required: true,
    },
    tidiness: {
        type: Number,
        required: true,
    },
    courtesy: {
        type: Number,
        required: true,
    },
    brief: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    postcode: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        require: false,
    },
    tradeperson: {
        type: Boolean,
        required: false,
    },
    contact: {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            minLength: 10,
            maxLength: 10,
        },
    },
});
exports.Form = mongoose_1.default.model("Form", formSchema);
