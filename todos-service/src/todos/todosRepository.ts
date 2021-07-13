import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository(Todo)
export class TodosRepository extends Repository<Todo> {
  getTodos(): Promise<Array<Todo>> {
    return getRepository(Todo)
      .createQueryBuilder('todos')
      .select()
      .getMany();
  }
}
