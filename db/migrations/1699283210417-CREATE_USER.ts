import { MigrationInterface, QueryRunner } from 'typeorm';

export class CREATEUSER1699283210417 implements MigrationInterface {
  name: 'CREATEUSER1699283210417';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "testuser" ("id" SERIAL NOT NULL, "username" character varying NOT NULL DEFAULT 'testuser', "password" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );

    await queryRunner.query(
      `INSERT INTO "testuser" ("username", "password") VALUES
       ('user1', 'password1'),
       ('user2', 'password2')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "testuser"`);
  }
}
