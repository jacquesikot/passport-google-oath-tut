import jwt from 'jsonwebtoken';

export const handleGoogleAuth = async (req, res) => {
  // Handle req.body validation and return 400 error if validation failed

  // Then check if user exists in DB

  // If user does not exist, create new user and return token
  const token = await jwt.sign(req.body);
  res.send(token);
};
export const handleGoogleAuthError = () => {};
export const logOutGoogleUser = () => {};
