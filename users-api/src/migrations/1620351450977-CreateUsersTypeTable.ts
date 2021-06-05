import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTypeTable1620351450977 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users_type",
        columns: [
          { name: "user_type_id", type: "int", isPrimary: true },
          { name: "role", type: "varchar", isUnique: true, length: "12"  },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users_type");
  }
}
