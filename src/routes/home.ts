import express, { Response } from 'express';

const homeRouter = express.Router();

homeRouter.get('/', (_req, res: Response) =>
  res.send('Welcome to Passport Tutorial Home Page')
);

export default homeRouter;
