export interface ComparePasswordUser {
  compare(
    data: ComparePasswordUser.request
  ): Promise<ComparePasswordUser.response>;
}

export namespace ComparePasswordUser {
  export type request = {
    hashPassword: string;
    plainPassword: string;
  };

  export type response = boolean | Error;
}
