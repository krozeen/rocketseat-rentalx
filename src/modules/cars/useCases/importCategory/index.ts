import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categoryRepository = CategoriesRepository.getInstance();

const importCategoryUsecase = new ImportCategoryUseCase(categoryRepository);

const importCategoryController = new ImportCategoryController(
  importCategoryUsecase,
);

export { importCategoryController };
