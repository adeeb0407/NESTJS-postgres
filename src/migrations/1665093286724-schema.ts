import { MigrationInterface, QueryRunner } from "typeorm";

export class schema1665093286724 implements MigrationInterface {
    name = 'schema1665093286724'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "details" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "website" character varying NOT NULL, "registrationNumber" integer NOT NULL, "address" text array NOT NULL DEFAULT '{}', "industry" character varying NOT NULL, CONSTRAINT "PK_02185da47c073158a934d3927dd" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "details"`);
    }

}
