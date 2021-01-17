import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import passport from 'passport';

import router from './routes/auth';

require('./middleware/passport');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

app.use(passport.initialize());

app.use('/api/auth/google', router);
app.use('/api/auth/google/callback', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
