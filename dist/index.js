"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const passport_1 = __importDefault(require("passport"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const home_1 = __importDefault(require("./routes/home"));
require('./middleware/passport');
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(helmet_1.default());
app.use(passport_1.default.initialize());
app.use('/', home_1.default);
app.use('/api/auth/google', authRouter_1.default);
app.use('/api/auth/google/callback', authRouter_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App Listening on port ${PORT}`));
//# sourceMappingURL=index.js.map