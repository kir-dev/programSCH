export enum Priority {
  SZINT,
  KAJAS,
  KOR,
  HAZ,
  EGYETEM,
  NOTGIVEN,
}

export enum Status {
  CREATED,
  SUBMITTED,
  APPROVED,
}

export type EventModel = {
  id: string;
  name: string;
  description: string;
  date: string; //TODO startDate+endDate?
  location: string;
  tags: string[];
  messages: string[]; //TODO külön reláció a kommenteknek?
  priority: Priority;
  color: string;
  status: Status;
  createdAt?: string;
  link?: string;
};
