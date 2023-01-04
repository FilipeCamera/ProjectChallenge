import { User } from '@domain/entities/user';

export interface ReadAllUser {
  exec(): Promise<ReadAllUser.response>;
}

export namespace ReadAllUser {
  export type response = User[];
}

export interface ReadSpecificUser {
  exec({ id }: ReadSpecificUser.request): Promise<ReadSpecificUser.response>;
}

export namespace ReadSpecificUser {
  export type request = {
    id: string;
  };
  export type response = User;
}
