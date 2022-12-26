import { User } from '@domain/entities/user';

export interface CreateUser {
  create(data: CreateUser.request): Promise<CreateUser.response>;
}

export namespace CreateUser {
  export type request = {
    email: string;
    password: string;
    nickname: string;
    cargo: string;
    social?: {
      linkedin?: string;
      github?: string;
    };
  };

  export type response = User;
}
