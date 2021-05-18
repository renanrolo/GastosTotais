import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import ErrorHandler from './configurations/error-handler'
import AuthController from './controllers/auth-controller'
import UsersController from './controllers/users-controller'
import jsonwebtoken from 'jsonwebtoken';

const PORT = process.env.PORT || 3334;

const app = express();

app.use(express.json());

app.use('/api/v1', AuthController);
app.use('/api/v1', UsersController);

app.get('/healthcheck', async (req: Request, res: Response) => {
  res.status(200).json('Health');
});

ErrorHandler(app);

const server = app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://0.0.0.0:${PORT}`);
});

createConnection()
  .then((_) => console.log('☁ [database]: Database connection established'))
  .catch((error) =>
    console.error(`⚠ [database]: Couldn't connect to the database: ${error}`)
  );