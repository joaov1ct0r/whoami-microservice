import express from 'express';

import handleClient from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/whoami', handleClient);

export default userRouter;
