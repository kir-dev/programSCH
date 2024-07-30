import { EventModel } from '@/api/model/event.model';
import { PublicUser } from '@/pages/user/types/PublicUser';

export type EventDetails = EventModel & {
  owner: PublicUser;
  organizers: PublicUser[];
  //comments: CommentModel[];
};
