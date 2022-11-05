import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667678141649 implements MigrationInterface {
    name = 'default1667678141649'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assignments" ADD "schedule" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assignments" DROP COLUMN "schedule"`);
    }

}
