import { registerAs } from '@nestjs/config';

export default registerAs('mydb', () => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(<string>process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  autoLoadEntities: true,
  entities: [`./../**/*.entity{.ts,.js}`],
  migrations: [`./../../db/migrations/*{.ts,.js}`],
  migrationsTableName: 'migrations',
  synchronize: true,
}));
