import { User } from '@domain/entities/user';

export interface VerifyUser {
  exec(data: VerifyUser.request): Promise<VerifyUser.response>;
}

export namespace VerifyUser {
  export type request = {
    email?: string;
    nickname?: string;
  };
  export type response = User;
}
