/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Delete, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  findAll(): string {
    return 'all users';
  }

  @Delete('/:id')
  findById(): string {
    return 'delete user by id';
  }
}
