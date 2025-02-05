import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS 설정 (프론트엔드와 연동 필요)
  app.enableCors({
    origin:'*', // 특정 도메인만 허용 가능
  });

  // 보안 강화를 위한 Helmet 적용
  app.use(helmet());

  // HTTP 요청 압축
  app.use(compression());

  // Error, Dto 필터처리
  app.useGlobalPipes();
  app.useGlobalFilters();

  await app.listen(3000);
}
bootstrap();
