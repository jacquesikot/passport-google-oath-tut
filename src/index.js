require('dotenv').config();
import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
