import passport from 'passport';
import GooglePassport from 'passport-google-oauth20';

import {
  GOOGLE_CALLBACK_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from '../constants';

const GoogleStrategy = GooglePassport.Strategy;

const userProfile = (profile) => {
  const { id, name, emails, provider } = profile;

  let firstName;
  let lastName;
  let email;

  if (emails && emails.length) email = emails[0].value;
  if (name.givenName) firstName = name.givenName;
  if (name.familyName) lastName = name.familyName;

  return {
    id,
    firstName,
    lastName,
    email,
    provider,
  };
};

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
      scope: ['profile', 'email'],
      passReqToCallback: true,
    },
    (_req, _accessToken, _refreshToken, profile, cb) =>
      cb(null, userProfile(profile))
  )
);
