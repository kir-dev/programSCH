import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    try {
      return await this.prisma.user.create({ data });
    } catch {
      throw new BadRequestException('Invalide User data');
    }
  }

  findAll() {
    return 'This action returns all users';
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { authSchId: id } });
    if (user === null) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  update(id: string) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
