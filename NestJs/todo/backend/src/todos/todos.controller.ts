import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/createTodo.dto';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) { }

    @Post()
    createTodo(@Body() todoData: CreateTodoDto) {
        return this.todosService.createTodo(todoData)
    }

    @Get()
    findAllTodos() {
        return this.todosService.getTodos()
    }
}
