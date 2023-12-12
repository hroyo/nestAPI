import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('route')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('route', app, document);
  // const port = process.env.PORT || 3001;

  await app.listen(3001);
}
bootstrap();
