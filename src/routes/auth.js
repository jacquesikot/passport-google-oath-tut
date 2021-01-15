import { router } from 'express';
import passport from 'passport';

import handleGoogleAuth from '../controller/auth';

//Validation of req.body is left out for brevity

const endpoint = '/api/auth/google';

router.get(
  endpoint,
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  endpoint + '/callback',
  passport.authenticate('google', { failureRedirect: '/google/error' }),
  handleGoogleAuth
);

router.get(endpoint + '/error', handleGoogleAuthError);

router.get(endpoint + '/logout', logOutGoogleUser);
