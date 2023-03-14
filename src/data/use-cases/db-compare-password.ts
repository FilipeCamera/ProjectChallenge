import { HashPassword } from '@data/protocols/cryptograph';
import { ComparePasswordUser } from '@domain/use-cases/compare-password-user';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseComparePassword implements ComparePasswordUser {
  constructor(private readonly hashPassword: HashPassword) {}

  async exec({
    hashPassword,
    plainPassword,
  }: ComparePasswordUser.request): Promise<ComparePasswordUser.response> {
    const result = await this.hashPassword.compare(hashPassword, plainPassword);

    if (!result)
      throw new Error('E-mail or nickname or password is incorrect.');

    return result;
  }
}
