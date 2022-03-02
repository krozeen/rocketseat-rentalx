import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationRepository: ISpecificationRepository,
  ) {}

  async execute({ description, name }: IRequest): Promise<void> {
    const specificationalreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificationalreadyExists) {
      throw new AppError('Specification already Exists!!!');
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
