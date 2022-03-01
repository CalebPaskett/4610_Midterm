import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Skip } from 'server/decorators/skip.decorator';
import { Todo } from 'server/entities/todo.entity';
import { AuthGuard } from 'server/providers/guards/auth.guard';
import { TodosService } from 'server/providers/services/todos.service';

class TodoPostBody {
  contents: string;
}

class TodoStatus {
  isComplete: boolean;
}

@Controller()
@Skip(AuthGuard)
export class Question5Controller {
  constructor(private todosService: TodosService) {}

  @Get('/todos')
  public async index() {
    const todos = await this.todosService.findAll();
    return { todos };
  }

  @Post('/todos')
  public async create(@Body() body: TodoPostBody) {
    let todo = new Todo();
    todo.content = body.contents;
    todo.isComplete = false;
    todo = await this.todosService.create(todo);
    return { todo };
  }

  @Post('todos/:id')
  public async update(@Param('id') id: string, @Body() body: TodoStatus) {
    let todoId = parseInt(id, 10);
    let isComplete = body.isComplete;

    let todo = await this.todosService.toggleComplete(todoId, isComplete);
    return { todo };
  }
}
