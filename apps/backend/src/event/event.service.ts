import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}
}
