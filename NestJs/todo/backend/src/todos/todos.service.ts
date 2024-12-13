import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/createTodo.dto';
import { PrismaService } from '../prisma.service'
import { Todo } from '@prisma/client';

@Injectable()
export class TodosService {
    constructor(private prisma: PrismaService) { }

    async createTodo(data: CreateTodoDto): Promise<Todo> {
        return this.prisma.todo.create({ data })
    }

    async getTodos(): Promise<Todo[]> {
        return this.prisma.todo.findMany()
    }
}
