import { OmitType } from '@nestjs/swagger';

import { User } from '../entities/user.entity';

export class CreateUserDto extends OmitType(User, [
  'authSchId',
  'email',
  'name',
  'isAdmin',
  'ownedEvents',
  'organizedEvents',
]) {}
