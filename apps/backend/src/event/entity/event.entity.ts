import { Color, Priority, Status } from '@prisma/client';
import { IsDate, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';

/*export enum Relevance {
  NOTGIVEN = 'NOTGIVEN',
  SZINT = 'SZINT',
  KAJAS = 'KAJAS',
  KOR = 'KOR',
  HAZ = 'HAZ',
  EGYETEM = 'EGYETEM',
}

export enum Color {
  RED = 'RED',
  ORANGE = 'ORANGE',
  YELLOW = 'YELLOW',
  GREEN = 'GREEN',
  BLUE = 'BLUE',
  PURPLE = 'PURPLE',
}

export enum Status {
  CREATED = 'CREATED',
  SUBMITTED = 'SUBMITTED',
  APPROVED = 'APPROVED',
}*/

export class Event {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsDate()
  date: Date;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString({ each: true })
  tags: string[];

  @IsString({ each: true })
  messages: string[];

  @IsNotEmpty()
  @IsEnum(Priority)
  priority: Priority;

  @IsNotEmpty()
  color: Color;

  @IsNotEmpty()
  status: Status;

  @IsString()
  @IsNotEmpty()
  ownerId: string;

  @IsDate()
  createdAt: Date;

  @IsString()
  link: string;
}
