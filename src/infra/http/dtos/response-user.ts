import { User } from '@domain/entities/user';

export class UserResponse {
  id: string;
  nickname: string;
  email: string;
  cargo: string;
  linkedin: string;
  github: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.nickname = user.nickname;
    this.email = user.email;
    this.cargo = user.cargo;
    this.linkedin = user.linkedIn;
    this.github = user.github;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
