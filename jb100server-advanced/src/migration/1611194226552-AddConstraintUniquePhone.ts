import { MigrationInterface, QueryRunner, TableUnique } from 'typeorm';

export class AddConstraintUniquePhone1611194226552
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.createUniqueConstraint(
      'users',
      new TableUnique({
        name: 'UNIQUE_PHONE',
        columnNames: ['phone'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.dropUniqueConstraint('users', 'UNIQUE_PHONE');
  }
}
