import passport from 'passport';
import GooglePassport from 'passport-google-oauth20';

import {
  GOOGLE_CALLBACK_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from '../constants';

const GoogleStrategy = GooglePassport.Strategy;

interface IOauthEmail {
  value: string;
  verified: boolean;
}

interface IOauthUser {
  id: string;
  emails: IOauthEmail[];
  name: { familyName: string; givenName: string };
  provider: string;
}

const userProfile = (profile: IOauthUser) => {
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

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user: any, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
      scope: ['profile', 'email'],
      passReqToCallback: true,
    },
    (_req, _accessToken, _refreshToken, profile: any, cb: any) =>
      cb(null, userProfile(profile))
  )
);