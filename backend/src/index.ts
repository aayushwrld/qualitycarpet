import express from "express";
import cors from "cors";
import testControl from "./routes/test.routes";

const app = express();

app.use(cors());

app.use("/", testControl);

app.listen(8080, () => {
  console.log("Listening to 8080! 🚀");
});
