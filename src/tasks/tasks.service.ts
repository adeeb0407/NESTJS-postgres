import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks = [];

  getAllTasks() {
    return this.tasks;
  }

  getAll() {
    return 'Hello';
  }

  createTask(createTaskDto: CreateTaskDto) {
    const { title, description } = createTaskDto;
    const task = {
      id: '1',
      title,
      description,
    };

    this.tasks.push(task);
    return task;
  }

  getOneTask(id: string) {
    return this.tasks?.find((dataItem) => dataItem?.id === id);
  }

  deleteTask(id: string) {
    this.tasks = this.tasks?.filter((dataItem) => dataItem?.id != id);
  }

  updateTaskTitle(id: string, title: string) {
    return 'Hello' + title + id;
  }
}
