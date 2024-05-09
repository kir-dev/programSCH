// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { OmitType, PartialType } from '@nestjs/swagger';

import { Event } from '../entity/event.entity';

export class UpdateEventDto extends PartialType(OmitType(Event, ['id', 'owner', 'createdAt'])) {}
