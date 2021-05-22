import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import ErrorHandler from './configurations/error-handler'
import path from 'path';
// import jsonwebtoken from 'jsonwebtoken';
// import fs from 'fs';

//controllers
import AuthController from './controllers/auth-controller';
import UsersController from './controllers/users-controller';

const PORT = process.env.PORT || 3334;

const app = express();

app.use(express.json());

app.use('/api/v1', AuthController);
app.use('/api/v1', UsersController);

const directoryPath = path.join(__dirname, 'controllers');

// fs.readdir(directoryPath, function (err, files) {
//     if (err) {
//         console.log('Unable to scan directory: ' + err);
//         throw err;
//     } 
    
//     files.forEach(function (file) {

//       console.log(file);
//     });
// });

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