import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../constants';

// This function manages the google authentication from the callback route
export const handleGoogleAuth = async (req: Request, res: Response) => {
  // Handle req.body validation and return 400 error if validation failed

  // Then check if user exists in Database

  // If user does not exist, create new user and return token
  // The code below shows only how to return token and user object from Google
  try {
    if (req.user) {
      const token = await jwt.sign(req.user, JWT_SECRET);
      const responseObject = {
        token: token,
        ...req.user,
      };
      res.send(responseObject);
    }
  } catch (error) {
    console.log(error);
  }
  // If user exists, find user, create token, and send to client
};
