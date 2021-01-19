import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import passport from 'passport';

// Import  Routers
import authRouter from './routes/authRouter';
import homeRouter from './routes/home';

// Require Passport midleware - without this your app wont work
require('./middleware/passport');

const app = express();

// App middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet()); // Helmet helps secure our http headers

app.use(passport.initialize());

app.use('/', homeRouter);
app.use('/api/auth/google', authRouter);
app.use('/api/auth/google/callback', authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App Listening on port ${PORT}`));
