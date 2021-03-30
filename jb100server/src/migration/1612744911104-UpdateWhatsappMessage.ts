import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateWhatsappMessage1612744911104 implements MigrationInterface {
  name = 'UpdateWhatsappMessage1612744911104';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" DROP COLUMN "help"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" ADD "latitude" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" ADD "longitude" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" ADD "to" jsonb NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" DROP COLUMN "to"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" DROP COLUMN "longitude"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" DROP COLUMN "latitude"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" ADD "help" jsonb NOT NULL`,
    );
  }
}
