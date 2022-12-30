import { UserRepository } from '@data/repositories/user-repository';
import { VerifyUser } from '@domain/use-cases/verify-user';

export class DatabaseVerifyUserAuth implements VerifyUser {
  constructor(private readonly userRepository: UserRepository) {}

  async exec(data: VerifyUser.request): Promise<VerifyUser.response> {
    const { email, nickname } = data;

    const user = await this.userRepository.verifyNicknameOrEmail({
      email,
      nickname,
    });

    if (!user) throw new Error('User not found.');

    return user;
  }
}
