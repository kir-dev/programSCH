import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entity/event.entity';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEventDto): Promise<Event> {
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

  async update(id: string, data: UpdateEventDto): Promise<Event> {
    try {
      return await this.prisma.event.update({ where: { id }, data });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(`Event not found`);
      }
      if (error instanceof BadRequestException) {
        throw new BadRequestException(`Invalid data`);
      }
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
