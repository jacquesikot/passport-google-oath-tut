"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.GOOGLE_CALLBACK_URL = exports.GOOGLE_CLIENT_SECRET = exports.GOOGLE_CLIENT_ID = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = process.env.PORT || 3000;
exports.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
exports.GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
exports.GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL || '';
exports.JWT_SECRET = process.env.JWT_KEY || '';
//# sourceMappingURL=constants.js.map