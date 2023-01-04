import { UserRepository } from '@data/repositories/user-repository';
import { UpdateUser } from '@domain/use-cases/update-user';

export class DatabaseUpdateUser implements UpdateUser {
  constructor(private readonly userRepository: UserRepository) {}

  async exec(data: UpdateUser.request): Promise<UpdateUser.response> {
    const userUpdated = await this.userRepository.update(data);

    if (!userUpdated) throw new Error('Could not change user.');

    return userUpdated;
  }
}
