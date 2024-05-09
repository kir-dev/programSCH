import { Controller } from '@nestjs/common';

import { EventService } from './event.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}
}
