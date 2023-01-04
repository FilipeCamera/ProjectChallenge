import { CreateUser } from '@domain/use-cases/create-user';
import { ReadAllUser, ReadSpecificUser } from '@domain/use-cases/read-user';
import { UpdateUser } from '@domain/use-cases/update-user';
import { VerifyUser } from '@domain/use-cases/verify-user';

export abstract class UserRepository {
  abstract create(data: CreateUser.request): Promise<CreateUser.response>;
  abstract verifyNicknameOrEmail(
    data: VerifyUser.request
  ): Promise<VerifyUser.response>;
  abstract findAll(): Promise<ReadAllUser.response>;
  abstract findById(id: string): Promise<ReadSpecificUser.response>;
  abstract update(data: UpdateUser.request): Promise<UpdateUser.response>;
}
