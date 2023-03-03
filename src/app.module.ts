// 应用程序的根模块(Module)
import { Module, Global } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';

@Global()
// @Module({
//   imports: [AdminModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
@Module({
  imports: [AdminModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
