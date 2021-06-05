import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserTable1620351450979 implements MigrationInterface {
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

    await queryRunner.createForeignKey(
      "users",
      new TableForeignKey({
        columnNames: ["user_uuid"],
        referencedTableName: "users",
        referencedColumnNames: ["user_uuid"],
        onDelete: "CASCADE"
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("auth_users");
  }
}
