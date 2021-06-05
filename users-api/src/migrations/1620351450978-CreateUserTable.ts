import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserTable1620351450978 implements MigrationInterface {
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
          { name: "user_type_id", type: "int" },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      "users_type",
      new TableForeignKey({
        columnNames: ["user_type_id"],
        referencedTableName: "users_type",
        referencedColumnNames: ["user_type_id"]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
