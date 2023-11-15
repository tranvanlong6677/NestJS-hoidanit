/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tranvanlong6677:long6677@clusternestjs.l6uizb1.mongodb.net/',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
