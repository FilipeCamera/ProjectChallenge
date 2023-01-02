import { CreateUser } from '@domain/use-cases/create-user';
import { UserRepository } from '../repositories/user-repository';
import { Injectable } from '@nestjs/common';
import { EncryptHash } from '@data/protocols/cryptograph';

@Injectable()
export class DatabaseCreateUser implements CreateUser {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encryptHash: EncryptHash
  ) {}

  async create(data: CreateUser.request): Promise<CreateUser.response> {
    const { email, nickname } = data;

    const isUserExist = await this.userRepository.verifyNicknameOrEmail({
      email,
      nickname,
    });

    if (!!isUserExist) throw new Error('Email or nickname already in use');

    data.password = await this.encryptHash.password(data.password);

    const user = this.userRepository.create(data);

    return user;
  }
}
