import { container } from 'tsyringe';

import { UserRepository } from '../../modules/accounts/entities/repositories/implementations/UserRepository';
import { IUserRepository } from '../../modules/accounts/entities/repositories/IUserRepository';
import { ICategoryRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';

container.registerSingleton<ICategoryRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository,
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
