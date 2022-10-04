import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get('/:id')
  getOneTask(@Param('id') id: string) {
    return this.tasksService.getOneTask(id);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): any {
    return this.tasksService.deleteTask(id);
  }

  @Patch(':id/title')
  updateTaskTitle(@Param('id') id: string, @Body('title') title: string) {
    return this.tasksService?.updateTaskTitle(id, title);
  }
}
