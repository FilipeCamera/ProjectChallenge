import { User } from '@domain/entities/user';

export interface UpdateUser {
  exec(data: UpdateUser.request): Promise<UpdateUser.response>;
}

export namespace UpdateUser {
  export type request = {
    nickname: string;
    cargo: string;
    linkedin: string | null;
    github: string | null;
    id: string;
  };

  export type response = User;
}

export interface PatchUser {
  exec(data: PatchUser.request): Promise<PatchUser.response>;
}

export namespace PatchUser {
  export type request = {
    nickname?: string;
    cargo?: string;
    linkedin?: string | null;
    github?: string | null;
    id: string;
  };

  export type response = User;
}
