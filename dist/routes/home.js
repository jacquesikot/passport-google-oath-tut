"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const homeRouter = express_1.default.Router();
homeRouter.get('/', (_req, res) => res.send('Welcome to Passport Tutorial Home Page'));
exports.default = homeRouter;
//# sourceMappingURL=home.js.map