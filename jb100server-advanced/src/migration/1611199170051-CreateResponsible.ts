import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateResponsible1611199170051 implements MigrationInterface {
  name = 'CreateResponsible1611199170051';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "public"."responsible" ("id" SERIAL NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "UQ_a31e5c0c08581475f4bcb60e5d7" UNIQUE ("phone"), CONSTRAINT "PK_56eae2377d92aa2614193414d5a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN "public"."users"."phone" IS NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."users" DROP CONSTRAINT "UNIQUE_PHONE"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."users" ADD CONSTRAINT "UNIQUE_PHONE" UNIQUE ("phone")`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN "public"."users"."phone" IS NULL`,
    );
    await queryRunner.query(`DROP TABLE "public"."responsible"`);
  }
}
