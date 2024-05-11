import { Injectable, NotFoundException } from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

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
