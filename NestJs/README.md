# NestJS and Prisma Notes

## Table of Contents

1. [Introduction to NestJS](#introduction-to-nestjs)
2. [Core Concepts of NestJS](#core-concepts-of-nestjs)
    - [Modules](#modules)
    - [Controllers](#controllers)
    - [Providers and Services](#providers-and-services)
    - [Dependency Injection](#dependency-injection)
3. [Introduction to Prisma](#introduction-to-prisma)
4. [Using Prisma with NestJS](#using-prisma-with-nestjs)
5. [PrismaService](#prismaservice)
6. [Workflow Overview](#workflow-overview)
7. [Key Concepts Recap](#key-concepts-recap)

---

## Introduction to NestJS

NestJS is a **Node.js framework** for building efficient, reliable, and scalable server-side applications. It uses **TypeScript** by default and follows a modular, component-based architecture inspired by Angular.

Key features of NestJS:
- **Modularity**: Applications are divided into modules.
- **Dependency Injection**: Built-in support for injecting dependencies.
- **TypeScript Support**: Type safety and modern JavaScript features.
- **Decorators**: Declarative programming with decorators for controllers, services, etc.

---

## Core Concepts of NestJS

### Modules

A **module** in NestJS is a class decorated with `@Module`. Modules are used to organize code logically and group related components together.

Example:

```typescript
import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
```

### Controllers

A **controller** handles incoming HTTP requests and returns responses. Controllers are decorated with `@Controller` and define routes with decorators like `@Get`, `@Post`, etc.

Example:

```typescript
import { Controller, Post, Body, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: { title: string; description?: string }) {
    return this.todoService.createTodo(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todoService.getTodos();
  }
}
```

### Providers and Services

**Providers** are used to handle business logic. A common type of provider is a **service**, which is decorated with `@Injectable`.

Example:

```typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async createTodo(data: { title: string; description?: string }) {
    return this.prisma.todo.create({ data });
  }

  async getTodos() {
    return this.prisma.todo.findMany();
  }
}
```

### Dependency Injection

**Dependency Injection (DI)** is a design pattern where classes request their dependencies instead of creating them directly. NestJS has built-in support for DI.

Example of injecting `TodoService` into `TodoController`:

```typescript
constructor(private readonly todoService: TodoService) {}
```

---

## Introduction to Prisma

**Prisma** is a modern **ORM (Object-Relational Mapping)** tool for Node.js and TypeScript. It simplifies database access and supports various databases like PostgreSQL, MySQL, and SQLite.

Key features of Prisma:
- Type-safe queries
- Auto-generated query builder
- Database schema migrations
- Intuitive data modeling

---

## Using Prisma with NestJS

1. **Install Prisma and Database Client**:

   ```bash
   npm install prisma @prisma/client
   ```

2. **Initialize Prisma**:

   ```bash
   npx prisma init
   ```

3. **Define Prisma Schema** (e.g., `prisma/schema.prisma`):

   ```prisma
   model Todo {
     id          Int      @id @default(autoincrement())
     title       String
     description String?
   }
   ```

4. **Run Migrations**:

   ```bash
   npx prisma migrate dev --name init
   ```

---

## PrismaService

The `PrismaService` is a custom service that extends `PrismaClient` to handle database connections in a NestJS app.

### Example `PrismaService`

```typescript
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
```

### Why Use `PrismaService`?

- **Singleton Pattern**: Ensures a single database connection instance.
- **Lifecycle Hooks**: Manages the connection lifecycle (`onModuleInit` and `onModuleDestroy`).

---

## Workflow Overview

1. **Create a Module**: Define a module to group related functionality.
2. **Create a Service**: Implement business logic and database operations.
3. **Create a Controller**: Define routes to handle HTTP requests.
4. **Inject Dependencies**: Use dependency injection to connect services in controllers.
5. **Database Access**: Use Prisma for database operations.

---

## Key Concepts Recap

### NestJS Concepts

- **Modules**: Group related code (controllers, services).
- **Controllers**: Handle incoming requests and define routes.
- **Providers/Services**: Handle business logic.
- **Dependency Injection**: Inject services into controllers.

### Prisma Concepts

- **PrismaClient**: Auto-generated client for database access.
- **Schema**: Define database models.
- **Migrations**: Keep your database schema in sync.
- **PrismaService**: Custom service for managing Prisma in NestJS.

---

Now you have a complete understanding of how NestJS and Prisma work together!
