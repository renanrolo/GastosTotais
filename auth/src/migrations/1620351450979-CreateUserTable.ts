import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1620351450979 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          { name: "user_uuid", type: "varchar", isPrimary: true },
          { name: "full_name", type: "varchar" },
          { name: "email", type: "varchar" },
          { name: "creation_date", type: "timestamp" },
          { name: "last_update_date", type: "timestamp" },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
