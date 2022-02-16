import { parse as csvParser } from 'csv-parse';
import fs from 'fs';

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParser();

    stream.pipe(parseFile);

    parseFile.on('data', async line => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
