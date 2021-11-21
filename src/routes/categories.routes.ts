import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categories = [];
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryalreadyExists = categoriesRepository.findByName(name);

  if(categoryalreadyExists){
    return response.status(400).json({Error: "Category already Exists!!!"});
  }

  categoriesRepository.create({name, description});

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {

  const allCategories = categoriesRepository.list();

  return response.status(201).json(allCategories);
})

export { categoriesRoutes };

