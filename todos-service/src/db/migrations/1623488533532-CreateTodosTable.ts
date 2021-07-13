import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTodosTable1623488533532 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "todos" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "description" character varying NOT NULL, status bool)`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todos"`);
    }

}
