import express from "express";
import cors from "cors";
import testControl from "./routes/test.routes";
import mongoose from "mongoose";
import formControl from "./routes/form.routes";

const app = express();

app.use(cors());

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
main()
  .then(() => {
    console.log("Connection Successful with Database 📊!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(process.env.MONGO_LINK as string);
}

app.use("/", testControl);
app.use("/form", formControl);

app.listen(8080, () => {
  console.log("Listening to 8080! 🚀");
});
