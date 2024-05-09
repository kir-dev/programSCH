// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { OmitType } from '@nestjs/swagger';

import { Event } from '../entity/event.entity';

export class CreateEventDto extends OmitType(Event, ['id', 'messages', 'priority', 'owner', 'createdAt']) {}
