import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667820788341 implements MigrationInterface {
    name = 'default1667820788341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assignments" DROP COLUMN "duration"`);
        await queryRunner.query(`ALTER TABLE "assignments" DROP COLUMN "schedule"`);
        await queryRunner.query(`ALTER TABLE "assignments" ADD "start" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "assignments" ADD "end" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assignments" DROP COLUMN "end"`);
        await queryRunner.query(`ALTER TABLE "assignments" DROP COLUMN "start"`);
        await queryRunner.query(`ALTER TABLE "assignments" ADD "schedule" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "assignments" ADD "duration" interval NOT NULL`);
    }

}
