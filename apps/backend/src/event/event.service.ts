import { Injectable, NotFoundException } from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.EventCreateInput): Promise<Event> {
    return await this.prisma.event.create({ data });
  }

  async findAll(): Promise<Event[]> {
    try {
      return await this.prisma.event.findMany();
    } catch {
      throw new NotFoundException(`Event not found`);
    }
  }

  async findOne(id: string): Promise<Event> {
    try {
      return await this.prisma.event.findUnique({ where: { id: parseInt(id) } });
    } catch {
      throw new NotFoundException(`Event not found`);
    }
  }

  async update(id: string, data: Prisma.EventUpdateInput): Promise<Event> {
    try {
      return this.prisma.event.update({ where: { id }, data });
    } catch {
      throw new NotFoundException(`Event not found`);
    }
  }

  async delete(id: string): Promise<Event> {
    try {
      return this.prisma.event.delete({ where: { id } });
    } catch {
      throw new NotFoundException(`Event not found`);
    }
  }
}
