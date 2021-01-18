import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import passport from 'passport';

import authRouter from './routes/auth';
import homeRouter from './routes/home';

require('./middleware/passport');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

app.use(passport.initialize());

app.use('/', homeRouter);
app.use('/api/auth/google', authRouter);
app.use('/api/auth/google/callback', authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App Listening on port ${PORT}`));
