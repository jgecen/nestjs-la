import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateWhatsappMessage1612498642121 implements MigrationInterface {
  name = 'UpdateWhatsappMessage1612498642121';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" DROP COLUMN "from"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" ADD "from" bigint NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" DROP COLUMN "from"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" ADD "from" integer NOT NULL`,
    );
  }
}
