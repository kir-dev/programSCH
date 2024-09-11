import { PublicUser } from '../../users/entities/PublicUser';
import { Event } from './event.entity';

export class EventDetailsDto extends Event {
  owner: PublicUser;
  organizers: PublicUser[];
}
