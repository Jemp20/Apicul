import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TaskCategoriesModule } from './task_categories/task_categories.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',     //root
    password: 'joel1234', //joel1234
    database: 'apicul',   //apicul
    entities: [User],
    synchronize: true,
  }), UserModule, TaskCategoriesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
