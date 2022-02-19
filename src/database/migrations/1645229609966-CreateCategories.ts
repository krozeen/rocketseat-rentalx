import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCategories1645229609966 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('rentalx_api', true);

    await queryRunner.createTable(
      new Table({
        name: 'categories',
        schema: 'rentalx_api',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropSchema('rentalx_api', true, true);
  }
}
