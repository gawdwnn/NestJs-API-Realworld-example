import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1634605318017 implements MigrationInterface {
  name = 'SeedDb1634605318017';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    await queryRunner.query(
      // password is 11111
      `INSERT INTO users (username, email, password) VALUES ('smartt', 'smartt@gmail.com', '$2b$10$KIL5X2x0/fXHuDZlt6YXWe7blOeXwc6bc1UAykWnvu3.azcqa/0Ka')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'First article description', 'First article body', 'coffee,dragons', 1), ('second-article', 'Second article', 'Second article description', 'Second article body', 'coffee,dragons', 1)`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(): Promise<void> {}
}
