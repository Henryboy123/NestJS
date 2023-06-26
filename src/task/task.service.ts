import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { TaskEntity } from './models/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskPostRepository: Repository<TaskEntity>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<CreateTaskDto> {
    return await this.taskPostRepository.save(createTaskDto);
  }

  async findAll(): Promise<CreateTaskDto[]> {
    return await this.taskPostRepository.find();
  }

  async findOne(id: number): Promise<CreateTaskDto> {
    return await this.taskPostRepository.findOne({ where: { id: id } });
  }

  async updateTask(
    id: number,
    updateTaskDto: UpdateTaskDto,
  ): Promise<UpdateResult> {
    return await this.taskPostRepository.update(id, updateTaskDto);
  }

  async removeTask(id: number): Promise<DeleteResult> {
    return await this.taskPostRepository.delete({ id: id });
  }
}
