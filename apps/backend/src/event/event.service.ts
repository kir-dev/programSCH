import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';
import { PrismaService } from 'nestjs-prisma';

import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventDetailsDto } from './entity/event.details';
import { Event } from './entity/event.entity';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEventDto): Promise<Event> {
    const { ownerId, ...restOfData } = data;
    try {
      return await this.prisma.event.create({
        data: {
          ...restOfData,
          owner: {
            connect: {
              authSchId: ownerId,
            },
          },
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientValidationError) {
        throw new BadRequestException(`Invalid data`);
      }
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') throw new BadRequestException(`Invalid data: user not found`);
      }
      throw error;
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
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') throw new BadRequestException(`Invalid data: user not found`);
        if (error.code === 'P2025') throw new NotFoundException(`Event not found`);
      }
      if (error instanceof PrismaClientValidationError) {
        throw new BadRequestException(`Invalid data`);
      }
      throw error;
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
