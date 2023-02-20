// 具有单一方法的基本服务(Service)
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World2!';
  }
  postHello(): string {
    return 'Hello World111!';
  }
}
