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
exports.logOutGoogleUser = exports.handleGoogleAuthError = exports.handleGoogleAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../constants");
const handleGoogleAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.user) {
            const token = yield jsonwebtoken_1.default.sign(req.user, constants_1.JWT_SECRET);
            const responseObject = Object.assign({ token: token }, req.user);
            res.send(responseObject);
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.handleGoogleAuth = handleGoogleAuth;
const handleGoogleAuthError = () => { };
exports.handleGoogleAuthError = handleGoogleAuthError;
const logOutGoogleUser = () => { };
exports.logOutGoogleUser = logOutGoogleUser;
//# sourceMappingURL=auth.js.map