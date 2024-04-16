import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Todo } from '@prisma/client';

@Injectable()
export class TodoService {
  test: string;
  bla: string;

  constructor(private prisma: PrismaService) {
    this.test = 'test';
    this.bla = 'bla';
  }

  async todos(data: Prisma.TodoWhereInput): Promise<Todo[] | null> {
    return this.prisma.todo.findMany({
      where: data,
    });
  }

  async createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({
      data,
    });
  }

  async deleteTodo(where: Prisma.TodoWhereUniqueInput): Promise<Todo> {
    return this.prisma.todo.delete({
      where,
    });
  }
}
