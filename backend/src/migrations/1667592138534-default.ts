import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667592138534 implements MigrationInterface {
    name = 'default1667592138534'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "assignments" ("id" character varying NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "duration" interval NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c54ca359535e0012b04dcbd80ee" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "assignments"`);
    }

}
