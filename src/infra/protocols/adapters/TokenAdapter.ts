import { Hash, Payload } from '@data/protocols/cryptograph';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenAdapter implements Hash {
  constructor(private readonly jwtService: JwtService) {}
  async generateToken(payload: Payload): Promise<string> {
    return this.jwtService.sign(payload, {
      secret: process.env.secret_key,
      expiresIn: '1h',
    });
  }
  async decodeToken(token: string): Promise<Payload> {
    return this.jwtService.decode(token) as Payload;
  }
}
