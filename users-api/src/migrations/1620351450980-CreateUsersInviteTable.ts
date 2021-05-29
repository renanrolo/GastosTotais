import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersInviteTable1620351450980 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users_invite",
        columns: [
          { name: "user_invite_uuid", type: "varchar", isPrimary: true },
          { name: "email", type: "varchar" },
          { name: "invite_date", type: "timestamp" },
          { name: "accepted", type: "bit" },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users_invite");
  }
}
