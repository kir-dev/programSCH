import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.EventCreateInput): Promise<Event> {
    try {
      return await this.prisma.event.create({ data });
    } catch {
      throw new BadRequestException('Invalid event id');
    }
  }

  async findAll(): Promise<Event[]> {
    return this.prisma.event.findMany();
  }

  async findOne(id: string): Promise<Event> {
    try {
      return await this.prisma.event.findUnique({ where: { id } });
    } catch {
      throw new NotFoundException(`Event not found`);
    }
  }

  async update(id: string, data: Prisma.EventUpdateInput): Promise<Event> {
    try {
      return await this.prisma.event.update({ where: { id }, data });
    } catch {
      throw new NotFoundException(`Event not found`);
    }
  }

  async delete(id: string): Promise<Event> {
    try {
      return await this.prisma.event.delete({ where: { id } });
    } catch {
      throw new NotFoundException(`Event not found`);
    }
  }
}
