"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const authController_1 = require("../controller/authController");
const authRouter = express_1.default.Router();
authRouter.get('/', passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
authRouter.get('/callback', passport_1.default.authenticate('google', { failureRedirect: '/' }), authController_1.handleGoogleAuth);
exports.default = authRouter;
//# sourceMappingURL=authRouter.js.map