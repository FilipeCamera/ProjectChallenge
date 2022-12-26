import { CreateUser } from '@domain/use-cases/create-user';
import { UserRepository } from '../repositories/user-repository';

export class DatabaseCreateUser implements CreateUser {
  constructor(private readonly userRepository: UserRepository) {}

  create(data: CreateUser.request): Promise<CreateUser.response> {
    const user = this.userRepository.create(data);

    return user;
  }
}
