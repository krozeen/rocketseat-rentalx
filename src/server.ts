import 'reflect-metadata';
import './database';
import './shared/container';

import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import { AppError } from './errors/AppError';
import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'Error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🚀 Server is Running in port ${port}`);
});
