import { Injectable } from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: Prisma.EventCreateInput): Promise<Event> {
    throw new Error(`Not implemented`);
  }
  async findAll(): Promise<Event[]> {
    throw new Error('Not implemented');
  }

  async findOne(id: string): Promise<Event> {
    throw new Error(`Not implemented`);
  }

  async update(id: string, data: Prisma.EventUpdateInput): Promise<Event> {
    throw new Error(`Not implemented`);
  }

  async delete(id: string): Promise<Event> {
    throw new Error(`Not implemented`);
  }
}
