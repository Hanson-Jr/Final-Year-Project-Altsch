import express from "express";
import Routes from "./routes";
import morgan from "morgan";
import config from "./config";
import cors from "cors";
import ErrorHandler from "./middlewears/error_handler.middlewear";
const app = express();

app.use(morgan("dev"));
app.set("view engine", "pug");
app.use(cors(config.CORS_OPTION));
app.use(express.json());
Routes(app);
app.use(ErrorHandler);

export default app;