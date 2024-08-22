import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import cors from 'cors';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(
    cors({
      origin: process.env.FRONTEND_HOST,
      credentials: true,
    })
  );
  await app.listen(3001);
}
bootstrap();
