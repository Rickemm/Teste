import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3333, () => {
    console.log('Server started on port 3333 🚀️');
  });
}
bootstrap();
