import { ISpecificationRepository } from '../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ description, name }: IRequest): void {
    const specificationalreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationalreadyExists) {
      throw new Error('Category already Exists!!!');
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
