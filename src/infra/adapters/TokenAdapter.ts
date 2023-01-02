import { Hash, Payload } from '@data/protocols/cryptograph';
import { JwtService } from '@nestjs/jwt';

export class TokenAdapter implements Hash {
  constructor(private readonly jwtService: JwtService) {}
  async generateToken(payload: Payload): Promise<string> {
    return this.jwtService.sign(payload);
  }
  async decodeToken(token: string): Promise<Payload> {
    return this.jwtService.decode(token) as Payload;
  }
}
