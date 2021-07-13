import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: ':memory:',
  entities: ['dist/src/**/*.entity{ .ts,.js}'],
  synchronize: false,
  migrations: ['dist/src/db/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
  migrationsRun: true,
};

export default config;
