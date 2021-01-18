"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const auth_1 = require("../controller/auth");
const authRouter = express_1.default.Router();
authRouter.get('/', passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
authRouter.get('/callback', passport_1.default.authenticate('google', { failureRedirect: '/' }), auth_1.handleGoogleAuth);
exports.default = authRouter;
//# sourceMappingURL=auth.js.map