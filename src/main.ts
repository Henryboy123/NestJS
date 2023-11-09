import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    cors({
      origin: ['http://localhost:3000'], // Replace with your allowed origins
      methods: ['GET', 'PUT', 'POST', 'DELETE'], // Specify allowed HTTP methods
    }),
  );
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT);
  console.log('Server started on port:', process.env.PORT);
}

bootstrap();
