import 'dotenv/config';

import express from 'express';

import userRouter from './routes/userRoutes.js';

import cors from 'cors';

const app = express();
