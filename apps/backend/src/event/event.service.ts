import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventDetailsDto } from './entity/event.details';
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

  async findOne(id: string): Promise<EventDetailsDto> {
    try {
      return await this.prisma.event.findUnique({
        where: { id },
        include: {
          owner: true,
          organizers: true,
        },
      });
    } catch {
      throw new NotFoundException(`Event not found`);
    }
  }

  async update(id: string, data: UpdateEventDto): Promise<Event> {
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
