import { UserRepository } from '@data/repositories/user-repository';
import { CreateUser } from '@domain/use-cases/create-user';
import { VerifyUser } from '@domain/use-cases/verify-user';
import { PrismaService } from '../prisma.service';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { Injectable } from '@nestjs/common';
import { User } from '@domain/entities/user';
import { ReadAllUser } from '@domain/use-cases/read-user';
import { UpdateUser } from '@domain/use-cases/update-user';

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

  async findAll(): Promise<ReadAllUser.response> {
    const users = await this.prisma.users.findMany();

    return PrismaUserMapper.toDomainUsers(users);
  }
  async findById(id: string): Promise<User> {
    const user = await this.prisma.users.findFirst({ where: { id } });

    return PrismaUserMapper.toDomain(user);
  }

  async update(data: UpdateUser.request): Promise<UpdateUser.response> {
    const { id, nickname, cargo, linkedin, github } = data;
    const user = await this.prisma.users.update({
      where: { id },
      data: { nickname, cargo, linkedin, github },
    });

    return PrismaUserMapper.toDomain(user);
  }
}
