import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { router } from './routes';
import swaggerFile from './swagger.json';

import 'reflect-metadata';
import './database';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🚀 Server is Running in port ${port}`);
});
