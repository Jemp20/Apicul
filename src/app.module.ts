import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TaskCategoriesModule } from './task_categories/task_categories.module';
import { TasksStatusModule } from './tasks_status/tasks_status.module';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';
import { TaskCategory } from './task_categories/entities/task_category.entity';
import { TasksStatus } from './tasks_status/entities/tasks_status.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',     //root
    password: 'joel1234', //joel1234
    database: 'apicul',   //apicul
    entities: [User, Task, TaskCategory, TasksStatus],
    synchronize: true,
  }), UserModule, TaskCategoriesModule, TasksStatusModule, TasksModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
