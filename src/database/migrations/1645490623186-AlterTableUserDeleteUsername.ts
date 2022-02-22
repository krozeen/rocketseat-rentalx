import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterTableUserDeleteUsername1645490623186
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('rentalx_api.users', 'username');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'rentalx_api.users',
      new TableColumn({
        name: 'username',
        type: 'varchar',
      }),
    );
  }
}
