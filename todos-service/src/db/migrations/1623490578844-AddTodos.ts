import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTodos1623490578844 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `insert into todos values(1, 'Learn VueJS', false)`,
        );
        await queryRunner.query(
            `insert into todos values(2, 'Learn Kotlin', false)`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
