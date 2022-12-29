import { CreateUser } from '@domain/use-cases/create-user';

export abstract class UserRepository {
  abstract create(data: CreateUser.request): Promise<CreateUser.response>;
  abstract existByNickName(value: string): Promise<boolean>;
}
