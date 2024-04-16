import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Prisma, Todo } from '@prisma/client';

@Controller('/todos')
export class TodoController {
  constructor(private readonly service: TodoService) {}

  @Get()
  getTodos(data: Prisma.TodoWhereInput): Promise<Todo[] | null> {
    return this.service.todos(data);
  }

  @Post()
  createTodo(@Body() data: Prisma.TodoCreateInput): Promise<Todo | null> {
    return this.service.createTodo(data);
  }
}
