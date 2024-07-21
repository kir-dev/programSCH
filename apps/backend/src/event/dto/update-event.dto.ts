import { OmitType, PartialType } from '@nestjs/swagger';

import { Event } from '../entity/event.entity';

export class UpdateEventDto extends PartialType(OmitType(Event, ['id', 'ownerId', 'createdAt'])) {}
