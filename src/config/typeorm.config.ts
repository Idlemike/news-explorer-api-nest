import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'nm89TY8HN',
  database: 'newsexplorer',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
