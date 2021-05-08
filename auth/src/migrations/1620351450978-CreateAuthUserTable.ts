import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1620351450978 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "auth_users",
        columns: [
          { name: "user_uuid", type: "varchar", isPrimary: true },
          { name: "password", type: "varchar" },
          { name: "last_update_date", type: "timestamp" },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("auth_users");
  }
}
