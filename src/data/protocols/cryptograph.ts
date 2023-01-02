export abstract class DecryptHash {
  abstract token(hash: string): Promise<string>;
}

export abstract class EncryptHash {
  abstract token(data: string): Promise<string>;
  abstract password(data: string): Promise<string>;
}

export abstract class CompareHash {
  abstract comparePassword(
    hashPassword: string,
    plainPassword: string
  ): Promise<boolean>;
}
