import { Color, Status } from '@/api/model/event.model';

export interface CreateEvent {
  name: string;
  description: string;
  date: string;
  location: string;
  tags: string[];
  organizerIds: string[];
  color: Color;
  status: Status;
  ownerId: string;
  link?: string;
}

export type CreateEventForm = {
  name: string;
  description: string;
  date: Date;
  location: string;
  tags: string[];
  organizerIds: string[];
  color: Color;
  //status: Status;
  link?: string;
};
