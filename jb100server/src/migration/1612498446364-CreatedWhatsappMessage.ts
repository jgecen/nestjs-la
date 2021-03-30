import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatedWhatsappMessage1612498446364 implements MigrationInterface {
  name = 'CreatedWhatsappMessage1612498446364';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "public"."whatsapp_message" ("id" SERIAL NOT NULL, "from" integer NOT NULL, "text" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "help" jsonb NOT NULL, CONSTRAINT "PK_d124b23b504f4a3d24a638ccc0f" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "public"."whatsapp_message"`);
  }
}
