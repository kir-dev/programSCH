import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';
import { PrismaService } from 'nestjs-prisma';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<UserEntity> {
    try {
      return await this.prisma.user.create({ data });
    } catch (error) {
      if (error instanceof PrismaClientValidationError) {
        throw new BadRequestException('Invalid User data');
      }
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') throw new BadRequestException(`Invalid User data: email already in use`);
      }
      throw error;
    }
  }

  async findAll(): Promise<UserEntity[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({ where: { authSchId: id } });
    if (user === null) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<UserEntity> {
    try {
      return await this.prisma.user.update({ where: { authSchId: id }, data });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') throw new BadRequestException(`Invalid data: email already in use`);
        if (error.code === 'P2025') throw new NotFoundException(`User not found`);
      }
      if (error instanceof PrismaClientValidationError) {
        throw new BadRequestException(`Invalid data`);
      }
      throw error;
    }
  }

  async delete(id: string): Promise<UserEntity> {
    try {
      return await this.prisma.user.delete({ where: { authSchId: id } });
    } catch {
      throw new NotFoundException(`User not found`);
    }
  }
}
