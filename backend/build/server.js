"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = __importDefault(require("./config"));
const cors_1 = __importDefault(require("cors"));
const error_handler_middlewear_1 = __importDefault(require("./middlewears/error_handler.middlewear"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.set("view engine", "pug");
app.use((0, cors_1.default)(config_1.default.CORS_OPTION));
app.use(express_1.default.json());
(0, routes_1.default)(app);
app.use(error_handler_middlewear_1.default);
exports.default = app;