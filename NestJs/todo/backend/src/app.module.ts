import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todos/todos.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
