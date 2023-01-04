import { UserRepository } from '@data/repositories/user-repository';
import { ReadSpecificUser } from '@domain/use-cases/read-user';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseReadSpecificUser implements ReadSpecificUser {
  constructor(private readonly userRepository: UserRepository) {}
  async exec({
    id,
  }: ReadSpecificUser.request): Promise<ReadSpecificUser.response> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new Error('User not found.');
    return user;
  }
}
