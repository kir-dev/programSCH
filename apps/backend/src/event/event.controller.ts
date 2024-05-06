import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { Event } from '@prisma/client';

import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventService } from './event.service';

@Controller()
export class EventController {
  constructor(private readonly eventService: EventService) {}
  @Post()
  createEvent(@Body() data: CreateEventDto) {
    return this.eventService.createEvent(data);
  }
  @Get()
  getEvents() {
    return this.eventService.getEvents();
  }

  @Get(':id')
  getEventById(id: string): Event {
    return this.eventService.getEventById(id);
  }

  @Patch(':id')
  updateEvent(id: string, @Body() data: UpdateEventDto): Event {
    return this.eventService.updateEvent(id, data);
  }

  @Delete(':id')
  deleteEvent(id: string): Event {
    return this.eventService.deleteEvent(id);
  }
}
