import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import ErrorHandler from './configurations/error-handler'

const PORT = process.env.PORT || 3335;

const app = express();

app.use(express.json());

app.get('/healthcheck', async (req: Request, res: Response) => {
  res.status(200).json('Health');
});

ErrorHandler(app);

const server = app.listen(PORT, () => {
  console.log(`⚡️[server]: Core.Api is running at http://0.0.0.0:${PORT}`);
});

createConnection()
  .then((_) => console.log('☁ [database]: Database connection established'))
  .catch((error) =>
    console.error(`⚠ [database]: Couldn't connect to the database: ${error}`)
  );