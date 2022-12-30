import { CreateUser } from '@domain/use-cases/create-user';
import { UserRepository } from '../repositories/user-repository';

export class DatabaseCreateUser implements CreateUser {
  constructor(private readonly userRepository: UserRepository) {}

  async create(data: CreateUser.request): Promise<CreateUser.response> {
    const { email, nickname } = data;

    const isUserExist = await this.userRepository.verifyNicknameOrEmail({
      email,
      nickname,
    });

    if (!!isUserExist) throw new Error('Email or nickname already in use');

    const user = this.userRepository.create(data);

    return user;
  }
}
