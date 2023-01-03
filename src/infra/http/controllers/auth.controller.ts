import { DatabaseAuthUser } from '@data/use-cases/db-auth-user';
import { Controller, Post, Body } from '@nestjs/common';
import { AuthUserBody } from '../dtos/auth-user-body';
import { DatabaseVerifyUserExist } from '@data/use-cases/db-verify-user-exist';
import { DatabaseComparePassword } from '@data/use-cases/db-compare-password';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly dbAuthUser: DatabaseAuthUser,
    private readonly dbVerifyUserExist: DatabaseVerifyUserExist,
    private readonly dbComparePassword: DatabaseComparePassword
  ) {}

  @Post('login')
  async login(@Body() body: AuthUserBody) {
    const { nickname, email, password } = body;

    const user = await this.dbVerifyUserExist.exec({ nickname, email });

    await this.dbComparePassword.compare({
      hashPassword: user.password,
      plainPassword: password,
    });

    const token = await this.dbAuthUser.login(user);

    return token;
  }
}
