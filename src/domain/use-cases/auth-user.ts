export interface AuthUser {
  login(data: AuthUser.request): Promise<AuthUser.response>;
}

export namespace AuthUser {
  export type request = {
    nickname?: string;
    email?: string;
    password: string;
  };

  export type response = {
    token: string;
  };
}
