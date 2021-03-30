import { TypeOrmModule } from '@nestjs/typeorm';

export const TypeOrmModuleTest = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'jb100',
  schema: 'public',
  synchronize: false,
  autoLoadEntities: true,
  entities: ['../../dist/**/*.entity{.ts,.js}'],
  migrations: ['../../dist/migration/**/*{.ts,.js}'],
  cli: {
    migrationsDir: '../../src/migration',
    subscribersDir: '../../src/subscriber',
  },
});
