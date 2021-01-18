import express from 'express';
import passport from 'passport';

import { handleGoogleAuth } from '../controller/auth';

const authRouter = express.Router();

authRouter.get(
  '/',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

authRouter.get(
  '/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  handleGoogleAuth
);

export default authRouter;
