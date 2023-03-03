import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getHello1(): string {
    return 'Hello World2!';
  }
  postHello(): string {
    return 'Hello World111!';
  }
}
