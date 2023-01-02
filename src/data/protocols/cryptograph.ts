export type Payload = {
  nickname: string;
  sub: string;
};

export abstract class Hash {
  abstract generateToken(payload: Payload): Promise<string>;
  abstract decodeToken(token: string): Promise<Payload>;
}

export abstract class HashPassword {
  abstract criptograph(data: string): Promise<string>;
  abstract compare(
    hashPassword: string,
    plainPassword: string
  ): Promise<boolean>;
}
