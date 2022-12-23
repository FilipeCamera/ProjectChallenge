import { User } from '@domain/entities/user';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
}
