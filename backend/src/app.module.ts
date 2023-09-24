import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './users/user.entity';

@Module({

  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'DataBase@018',
    database: 'test',
    entities: [user],
    synchronize: true,
  }), UsersModule],
})
export class AppModule {}
