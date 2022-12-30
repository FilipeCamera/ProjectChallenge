import { UserRepository } from '@data/repositories/user-repository';
import { CreateUser } from '@domain/use-cases/create-user';
import { VerifyUser } from '@domain/use-cases/verify-user';
import { PrismaService } from '../prisma.service';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateUser.request): Promise<CreateUser.response> {
    const user = await this.prisma.users.create({ data });
    return PrismaUserMapper.toDomain(user);
  }
  async verifyNicknameOrEmail(
    data: VerifyUser.request
  ): Promise<VerifyUser.response> {
    const { nickname, email } = data;

    const user = await this.prisma.users.findFirst({
      where: { OR: [{ email }, { nickname }] },
    });

    return !!user ? PrismaUserMapper.toDomain(user) : null;
  }
}
