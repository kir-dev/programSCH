import { Color, Priority, Status } from '@prisma/client';
import { IsDate, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';

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
  @IsEnum(Status)
  status: Status;

  @IsString()
  @IsNotEmpty()
  ownerId: string;

  @IsDate()
  createdAt: Date;

  @IsString()
  link: string;
}
