import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getService(): string {
    return `Service OK | ${Date.now()}`;
  }
}
