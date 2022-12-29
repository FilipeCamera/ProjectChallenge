import { UserRepository } from '@data/repositories/user-repository';
import { User } from '@domain/entities/user';
import { CreateUser } from '@domain/use-cases/create-user';

export class MemoryUserRepository implements UserRepository {
  public users: User[] = [];

  async create(data: CreateUser.request): Promise<CreateUser.response> {
    const user = new User(data);

    this.users.push(user);

    return user;
  }

  async existByNickName(value: string): Promise<boolean> {
    return this.users.map((user) => user.nickname === value).includes(true);
  }
}
