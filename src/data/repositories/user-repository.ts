import { CreateUser } from '@domain/use-cases/create-user';
import { VerifyUser } from '@domain/use-cases/verify-user';

export abstract class UserRepository {
  abstract create(data: CreateUser.request): Promise<CreateUser.response>;
  abstract verifyNicknameOrEmail(
    data: VerifyUser.request
  ): Promise<VerifyUser.response>;
}
