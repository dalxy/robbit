import { Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
@Controller('admin')
export class AdminController {
  constructor(private readonly appService: AdminService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello1();
  }

  @Post('list')
  create(): string {
    return 'create111';
  }
}
