import cors from 'cors';
import express from 'express';

import 'reflect-metadata';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specification.routes';
// import './database/connection';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🚀 Server is Running in port ${port}`);
});
