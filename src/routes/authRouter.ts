import express from 'express';
import passport from 'passport';

// Controller function for managing the auth route
import { handleGoogleAuth } from '../controller/authController';

const authRouter = express.Router();

// Google login inital route - localhost:3000/api/auth/google
authRouter.get(
  '/',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Gooogle login callback that manages the returned user object
authRouter.get(
  '/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  handleGoogleAuth
);

export default authRouter;
