import { Router } from 'express';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';

const specificationsRoutes = Router();

const createCategoryController = new CreateCategoryController();

specificationsRoutes.post('/', createCategoryController.handle);

// specificationsRoutes.get('/', (request, response) => {});

export { specificationsRoutes };
