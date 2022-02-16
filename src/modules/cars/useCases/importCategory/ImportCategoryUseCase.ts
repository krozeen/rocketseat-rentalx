/* eslint-disable array-callback-return */
import { parse as csvParser } from 'csv-parse';
import fs from 'fs';

import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  loadCategory(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const categories: IImportCategory[] = [];
      const parseFile = csvParser();

      stream.pipe(parseFile);

      parseFile
        .on('data', async line => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on('end', () => {
          resolve(categories);
        })
        .on('error', err => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategory(file);

    categories.map(category => {
      const { name, description } = category;

      const existsCategory = this.categoryRepository.findByName(name);

      if (existsCategory) {
        throw new Error(`Category ${name} already exists`);
      }

      this.categoryRepository.create({ name, description });
    });

    console.log(categories);
  }
}

export { ImportCategoryUseCase };