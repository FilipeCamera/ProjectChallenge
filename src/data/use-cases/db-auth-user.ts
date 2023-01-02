import { CompareHash, EncryptHash } from '@data/protocols/cryptograph';
import { UserRepository } from '@data/repositories/user-repository';
import { AuthUser } from '@domain/use-cases/auth-user';

export class DatabaseAuthUser implements AuthUser {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly compareHash: CompareHash,
    private readonly encryptHash: EncryptHash
  ) {}

  async login(data: AuthUser.request): Promise<AuthUser.response> {
    const { nickname, email, password } = data;

    const user = await this.userRepository.verifyNicknameOrEmail({
      email,
      nickname,
    });

    if (!user) throw new Error('User not found.');

    const isValid = await this.compareHash.comparePassword(
      user.password,
      password
    );

    if (!isValid) throw new Error('email/nickname or password incorrect.');

    const token = await this.encryptHash.token(user.id);

    return { token };
  }
}
