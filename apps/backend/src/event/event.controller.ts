import { Body, Controller, Delete, Param, Patch } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { EventService } from './event.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.EventUpdateInput) {
    return this.eventService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.eventService.delete(id);
  }
}
