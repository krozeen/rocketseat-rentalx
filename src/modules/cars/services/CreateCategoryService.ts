import { ICategoryRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryalreadyExists = this.categoriesRepository.findByName(name);

    if (categoryalreadyExists) {
      throw new Error('Category already Exists!!!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
