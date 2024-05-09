import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventService } from './event.service';

@Controller('events')
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
  getEventById(id: string) {
    return this.eventService.getEventById(id);
  }

  @Patch(':id')
  updateEvent(id: string, @Body() data: UpdateEventDto) {
    return this.eventService.updateEvent(id, data);
  }

  @Delete(':id')
  deleteEvent(id: string) {
    return this.eventService.deleteEvent(id);
  }
}
