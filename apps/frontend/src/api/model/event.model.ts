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

export enum Color {
  RED = 'RED',
  ORANGE = 'ORANGE',
  YELLOW = 'YELLOW',
  GREEN = 'GREEN',
  BLUE = 'BLUE',
  PURPLE = 'PURPLE',
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
  color: Color;
  status: Status;
  createdAt?: string;
  link?: string;
};
