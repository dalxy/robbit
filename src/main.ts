// 应用程序的入口文件，它使用核心函数 NestFactory 来创建 Nest 应用程序的实例。
import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestApplication>(AppModule);

  // 设置swagger文档
  const config = new DocumentBuilder()
    .setTitle('管理后台')
    .setDescription('管理后台文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
