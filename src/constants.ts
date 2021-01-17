import 'dotenv/config';

export const PORT = process.env.PORT || 3000;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
export const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL || '';
export const JWT_SECRET = process.env.JWT_KEY || '';
