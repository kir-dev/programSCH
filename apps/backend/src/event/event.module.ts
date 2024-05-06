import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true })],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
