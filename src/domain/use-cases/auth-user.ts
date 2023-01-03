import { User } from '@domain/entities/user';

export interface AuthUser {
  login(user: AuthUser.request): Promise<AuthUser.response>;
}

export namespace AuthUser {
  export type request = User;

  export type response = {
    token: string;
  };
}
