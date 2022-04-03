import 'dotenv/config';

import express from 'express';

import userRouter from './routes/userRoutes.js';

import cors from 'cors';

const app = express();

app.use(cors());

app.use('/api', userRouter);

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server running');
});
