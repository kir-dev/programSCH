import { Injectable } from '@nestjs/common';
import { Event } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}
  async createEvent(data: CreateEventDto): Promise<Event> {
    throw new Error(`Not implemented`);
  }
  async getEvents(): Promise<Event[]> {
    throw new Error('Not implemented');
  }

  async getEventById(id: string): Promise<Event> {
    throw new Error(`Not implemented`);
  }

  async updateEvent(id: string, data: UpdateEventDto): Promise<Event> {
    throw new Error(`Not implemented`);
  }

  async deleteEvent(id: string): Promise<Event> {
    throw new Error(`Not implemented`);
  }
}
