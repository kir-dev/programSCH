import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class User {
  @IsString()
  @IsNotEmpty()
  authSchId: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  nickname: string;
  phone: string;

  @IsBoolean()
  isAdmin: boolean;

  ownedEvents: Event[];
  organizedEvents: Event[];
}
