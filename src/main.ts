const fmp = require('fastify-multipart');
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('No-Name')
    .setDescription("The API tester")
    .setVersion("1.0")
    .addTag("Auth")
    .addTag("kitchen")
    .addTag("User")
    .addTag("Region")
    .addTag("meal")
    .addTag("Unit")
    .addTag("Discount")
    .addTag("Ingredients")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-docs", app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      transform: true,
      whitelist: true,
    }),
  );

  app.enableCors();
  app.register(require('fastify-multipart'))

  await app.listen(process.env.PORT || 3000, "0.0.0.0");
}
bootstrap();
