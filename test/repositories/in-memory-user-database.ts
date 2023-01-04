import { UserRepository } from '@data/repositories/user-repository';
import { User } from '@domain/entities/user';
import { CreateUser } from '@domain/use-cases/create-user';
import { ReadAllUser, ReadSpecificUser } from '@domain/use-cases/read-user';
import { UpdateUser } from '@domain/use-cases/update-user';
import { VerifyUser } from '@domain/use-cases/verify-user';

export class MemoryUserRepository implements UserRepository {
  public users: User[] = [];

  async create(data: CreateUser.request): Promise<CreateUser.response> {
    const user = new User(data);

    this.users.push(user);

    return user;
  }

  async verifyNicknameOrEmail(
    data: VerifyUser.request
  ): Promise<VerifyUser.response> {
    return this.users.find(
      (user) => user.email === data.email || user.nickname === data.nickname
    );
  }

  async findAll(): Promise<ReadAllUser.response> {
    return this.users;
  }

  async findById(id: string): Promise<ReadSpecificUser.response> {
    return this.users.find((user) => user.id === id);
  }

  async update(data: UpdateUser.request): Promise<User> {
    const { id, nickname, cargo, linkedin, github } = data;
    this.users
      .filter((user) => user.id === id)
      .forEach((user) => {
        user.nickname = nickname;
        user.cargo = cargo;
        user.linkedIn = linkedin;
        user.github = github;
      });

    const updated = this.users.find((user) => user.id === id);

    return updated;
  }
}
