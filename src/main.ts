import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json, urlencoded } from 'express'; // ⬅️ tambahkan ini

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

<<<<<<< HEAD
  app.use(json({ limit: '10mb' }));
  app.use(urlencoded({ extended: true, limit: '10mb' }));

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

=======
  // Enable CORS
  app.enableCors({
    origin: ['http://localhost:3000'], // ganti dengan domain frontend produksi
    credentials: true,
  });

  // Swagger setup
>>>>>>> dfa3a5a0077648c0403598013a74293f96b45677
  const config = new DocumentBuilder()
    .setTitle('API Dokumentasi')
    .setDescription('Dokumentasi endpoint API untuk aplikasi kamu')
    .setVersion('1.0')
    .addTag('auth')
    .build();

  const document = SwaggerModule.createDocument(app, config);
<<<<<<< HEAD
  SwaggerModule.setup('api', app, document);
=======
  SwaggerModule.setup('docs', app, document); // akses di /docs
>>>>>>> dfa3a5a0077648c0403598013a74293f96b45677

  await app.listen(3000);
}
bootstrap();
