import { User } from '@domain/entities/user';
import { Users } from '@prisma/client';

export class PrismaUserMapper {
  static toDomain(raw: Users): User {
    return new User(
      {
        nickname: raw.nickname,
        password: raw.password,
        email: raw.email,
        cargo: raw.cargo,
        linkedin: raw.linkedin,
        github: raw.github,
        canceledAt: raw.canceledAt,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      raw.id
    );
  }
  static toDomainUsers(raw: Users[]): User[] {
    return raw.map(
      (user) =>
        new User(
          {
            nickname: user.nickname,
            password: user.password,
            email: user.email,
            cargo: user.cargo,
            linkedin: user.linkedin,
            github: user.github,
            canceledAt: user.canceledAt,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
          },
          user.id
        )
    );
  }
}
