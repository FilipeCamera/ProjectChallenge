import { HashPassword } from '@data/protocols/cryptograph';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptoAdapter implements HashPassword {
  async criptograph(data: string): Promise<string> {
    return await bcrypt.hash(data, 8);
  }
  async compare(hashPassword: string, plainPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashPassword);
  }
}
