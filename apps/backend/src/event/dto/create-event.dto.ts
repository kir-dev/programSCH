import { OmitType } from '@nestjs/swagger';

import { Event } from '../entity/event.entity';

export class CreateEventDto extends OmitType(Event, ['id', 'messages', 'priority', 'createdAt']) {}
