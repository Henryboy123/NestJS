import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { UserEntity } from './models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserPostRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    return await this.UserPostRepository.save(createUserDto);
  }

  async findAll(): Promise<CreateUserDto[]> {
    return await this.UserPostRepository.find();
  }

  async findOne(id: number): Promise<CreateUserDto> {
    return await this.UserPostRepository.findOne({ where: { id: id } });
  }

  async findOneWithUsername(username: string) {
    return await this.UserPostRepository.findOne({
      where: { username: username },
    });
  }

  async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    return await this.UserPostRepository.update(id, updateUserDto);
  }

  async removeUser(id: number): Promise<DeleteResult> {
    return await this.UserPostRepository.delete({ id: id });
  }
}
