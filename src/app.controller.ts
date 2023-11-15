/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  @Render('home')
  getHome() {
    console.log('check port', this.configService.get<string>('PORT'));
    return { message: this.appService.getHello() };
  }
}
