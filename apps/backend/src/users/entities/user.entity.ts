import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UserEntity {
  @IsString()
  @IsNotEmpty()
  authSchId: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  nickname: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsBoolean()
  isAdmin: boolean;
}
