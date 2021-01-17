"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const router = express_1.default.Router();
const auth_1 = require("../controller/auth");
router.get('/', passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/callback', passport_1.default.authenticate('google', { failureRedirect: '/google/error' }), auth_1.handleGoogleAuth);
router.get('/error', auth_1.handleGoogleAuthError);
router.get('/logout', auth_1.logOutGoogleUser);
exports.default = router;
//# sourceMappingURL=auth.js.map