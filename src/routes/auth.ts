import express from 'express';
import passport from 'passport';

const router = express.Router();

import {
  handleGoogleAuth,
  handleGoogleAuthError,
  logOutGoogleUser,
} from '../controller/auth';

router.get(
  '/',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/callback',
  passport.authenticate('google', { failureRedirect: '/google/error' }),
  handleGoogleAuth
);

router.get('/error', handleGoogleAuthError);

router.get('/logout', logOutGoogleUser);

export default router;
