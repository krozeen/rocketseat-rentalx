
import express from 'express';
import cors from 'cors';
import { categoriesRoutes } from './routes/categories.routes';

import 'reflect-metadata';
//import './database/connection';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/categories", categoriesRoutes);


const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`🚀 Server is Running in port ${port}`);
});
