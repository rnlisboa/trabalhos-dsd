import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors';

import { router } from './routes/route';

const app = express();

const PORT = 3081;

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
})
app.use(express.json());

app.use('/distance', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });