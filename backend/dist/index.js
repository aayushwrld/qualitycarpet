"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const test_routes_1 = __importDefault(require("./routes/test.routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const form_routes_1 = __importDefault(require("./routes/form.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
main()
    .then(() => {
    console.log("Connection Successful with Database 📊!");
})
    .catch((err) => {
    console.log(err);
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect(process.env.MONGO_LINK);
    });
}
app.use("/", test_routes_1.default);
app.use("/form", form_routes_1.default);
app.listen(8080, () => {
    console.log("Listening to 8080! 🚀");
});
