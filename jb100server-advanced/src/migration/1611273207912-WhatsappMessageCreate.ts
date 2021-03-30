import { MigrationInterface, QueryRunner } from 'typeorm';

export class WhatsappMessageCreate1611273207912 implements MigrationInterface {
  name = 'WhatsappMessageCreate1611273207912';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "public"."whatsapp_message" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "userId" integer, "responsibleId" integer, CONSTRAINT "PK_d124b23b504f4a3d24a638ccc0f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN "public"."users"."phone" IS NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."users" ADD CONSTRAINT "UQ_d7c3999ff1d3a680127e7fabced" UNIQUE ("phone")`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" ADD CONSTRAINT "FK_40d3402978c2100e736c8592406" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" ADD CONSTRAINT "FK_0c23a0fbfae34f8d671e2def815" FOREIGN KEY ("responsibleId") REFERENCES "public"."responsible"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" DROP CONSTRAINT "FK_0c23a0fbfae34f8d671e2def815"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."whatsapp_message" DROP CONSTRAINT "FK_40d3402978c2100e736c8592406"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."users" DROP CONSTRAINT "UQ_d7c3999ff1d3a680127e7fabced"`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN "public"."users"."phone" IS NULL`,
    );
    await queryRunner.query(`DROP TABLE "public"."whatsapp_message"`);
  }
}
