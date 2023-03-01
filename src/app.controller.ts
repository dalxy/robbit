// 单个路由的基本控制器(Controller)
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello1();
  }

  @Post('list')
  create(): string {
    return 'create111';
  }
}
