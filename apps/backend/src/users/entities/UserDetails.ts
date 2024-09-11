import { Event } from '../../event/entity/event.entity';
import { PublicUser } from './PublicUser';

export class UserDetails extends PublicUser {
  isAdmin: boolean;
  nickname: string;
  email: string;
  phone: string;
  ownedEvents: Event[];
  organizedEvents: Event[];
}
