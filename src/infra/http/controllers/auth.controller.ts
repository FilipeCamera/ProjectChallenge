import { DatabaseAuthUser } from '@data/use-cases/db-auth-user';
import { Controller, Post, Body } from '@nestjs/common';
import { AuthUserBody } from '../dtos/auth-user-body';

@Controller('auth')
export class AuthController {
  constructor(private readonly dbAuthUser: DatabaseAuthUser) {}

  @Post('login')
  async login(@Body() body: AuthUserBody) {
    const token = await this.dbAuthUser.login(body);

    return token;
  }
}
