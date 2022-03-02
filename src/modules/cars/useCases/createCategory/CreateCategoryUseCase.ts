import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoryRepository,
  ) {}

  async execute({ description, name }: IRequest): Promise<void> {
    const categoryalreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryalreadyExists) {
      throw new AppError('Category already Exists!!!');
    }

    await this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
