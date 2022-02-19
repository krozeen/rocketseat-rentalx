import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

export default (): ImportCategoryController => {
  const categoryRepository = new CategoriesRepository();

  const importCategoryUsecase = new ImportCategoryUseCase(categoryRepository);

  const importCategoryController = new ImportCategoryController(
    importCategoryUsecase,
  );

  return importCategoryController;
};
