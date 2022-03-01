import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'server/entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll() {
    return this.todosRepository.find();
  }

  create(todo: Todo) {
    return this.todosRepository.save(todo);
  }

  async toggleComplete(id: number, isComplete: boolean) {
    const todo = await this.todosRepository.findOne({ id });
    todo.isComplete = isComplete;
    console.log(isComplete);
    return this.todosRepository.save(todo);
  }
}
