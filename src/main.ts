import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enabling CORS create security issues. This is just for demo purpose
  app.enableCors();
  
  await app.listen(3000);
}
bootstrap();
