import {TodosRepository} from './todosRepository';
import {Injectable} from '@nestjs/common';
import {Todo} from "./todo.entity";

@Injectable()
export class TodosService {
  constructor(private readonly todosRepository: TodosRepository) {}

  async getTodos(): Promise<Todo[]> {
    return (await this.todosRepository.getTodos());
  }

  async getTodo(id: number): Promise<Todo> {
    return await this.todosRepository.findOne({where: {id: id}});
  }

  async addTodo(todoDescription: string) {
    return await this.todosRepository.save({description: todoDescription, status: false});
  }
}
