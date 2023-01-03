import { Hash } from '@data/protocols/cryptograph';
import { AuthUser } from '@domain/use-cases/auth-user';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseAuthUser implements AuthUser {
  constructor(private readonly hash: Hash) {}

  async login(user: AuthUser.request): Promise<AuthUser.response> {
    const token = await this.hash.generateToken({
      nickname: user.nickname,
      sub: user.id,
    });

    return { token };
  }
}
