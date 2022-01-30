import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { DeepPartial, Repository } from 'typeorm';
import { UserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async create(user: UserDto): Promise<UserDto> {
    try {
      const userExists = await this.userRepo.findOne({
        where: { email: user.email },
      });

      if (!userExists) {
        return this.userRepo.save(
          this.userRepo.create(user as DeepPartial<UserEntity>),
        );
      }
    } catch {
      throw new Error('User already exists!');
    }
  }

  async findAll(): Promise<UserDto[]> {
    try {
      const users = await this.userRepo.find();

      if (users) return users;
    } catch {
      throw new Error('No user Found!');
    }
  }

  async findOne(id: number) {
    try {
      const users = await this.userRepo.findOne(id);

      if (users) return users;
    } catch {
      throw new Error('No user Found!');
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userRepo.findOne(id);

      return this.userRepo.update(
        user as DeepPartial<UserEntity>,
        updateUserDto as DeepPartial<UserEntity>,
      );
    } catch {
      throw new Error('No user Found!');
    }
  }

  async remove(id: number) {
    try {
      const userExists = await this.userRepo.findOne(id);

      if (userExists) {
        return this.userRepo.delete(userExists);
      }
    } catch {
      throw new Error('No user Found!');
    }
  }
}
