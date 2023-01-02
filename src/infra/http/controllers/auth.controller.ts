import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  async login() {
    const token = 'blabla';

    return token;
  }
}
