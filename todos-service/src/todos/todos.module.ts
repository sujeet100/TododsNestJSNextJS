import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Todo} from "./todo.entity";
import {TodosRepository} from "./todosRepository";
import {TodosService} from "./todos.service";
import {TodosResolver} from "./todos.resolver";

@Module({
  imports: [TypeOrmModule.forFeature([Todo, TodosRepository])],
  providers: [TodosService, TodosResolver],
})
export class TodosModule {}
