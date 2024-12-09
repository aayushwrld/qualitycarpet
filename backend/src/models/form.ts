import mongoose, { mongo } from "mongoose";

const formSchema = new mongoose.Schema({
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
      type: Number,
      required: true,
      minLength: 10,
      maxLength: 10,
    },
  },
});

export const Form = mongoose.model("Form", formSchema)