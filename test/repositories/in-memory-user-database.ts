import { UserRepository } from '@data/repositories/user-repository';
import { User } from '@domain/entities/user';
import { CreateUser } from '@domain/use-cases/create-user';
import { VerifyUser } from '@domain/use-cases/verify-user';

export class MemoryUserRepository implements UserRepository {
  public users: User[] = [];

  async create(data: CreateUser.request): Promise<CreateUser.response> {
    const user = new User(data);

    this.users.push(user);

    return user;
  }

  async verifyNicknameOrEmail(data: VerifyUser.request): Promise<User> {
    return this.users.find(
      (user) => user.email === data.email || user.nickname === data.nickname
    );
  }
}
