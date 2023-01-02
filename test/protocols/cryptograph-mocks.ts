import { Hash, HashPassword, Payload } from '@data/protocols/cryptograph';
import { randomUUID } from 'node:crypto';

export class TokenHash implements Hash {
  _token: string = randomUUID();
  attributes: Payload;
  async generateToken(payload: Payload): Promise<string> {
    this.attributes = payload;
    return this._token;
  }
  async decodeToken(token: string): Promise<Payload> {
    this._token = token;
    return this.attributes;
  }
}

export class PasswordCrypto implements HashPassword {
  hash: string = randomUUID();
  pass: string;
  plain: string;
  isValid: boolean;

  constructor(isValid?: boolean) {
    this.isValid = isValid ?? false;
  }
  async criptograph(data: string): Promise<string> {
    this.pass = data;
    return this.hash;
  }
  async compare(hashPassword: string, plainPassword: string): Promise<boolean> {
    this.hash = hashPassword;
    this.plain = plainPassword;
    return this.isValid;
  }
}
