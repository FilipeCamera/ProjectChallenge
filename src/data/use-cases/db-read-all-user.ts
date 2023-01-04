import { UserRepository } from '@data/repositories/user-repository';
import { ReadAllUser } from '@domain/use-cases/read-user';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseReadAllUser implements ReadAllUser {
  constructor(private readonly userRepository: UserRepository) {}

  async exec(): Promise<ReadAllUser.response> {
    const users = await this.userRepository.findAll();

    if (!users || users.length === 0) throw new Error('Users not found.');

    return users;
  }
}
