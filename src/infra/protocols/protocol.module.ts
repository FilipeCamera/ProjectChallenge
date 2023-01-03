import { Hash, HashPassword } from '@data/protocols/cryptograph';
import { Module } from '@nestjs/common';
import { TokenAdapter } from './adapters/TokenAdapter';
import { CryptoAdapter } from './adapters/CryptoAdapter';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    JwtService,
    { provide: Hash, useClass: TokenAdapter },
    { provide: HashPassword, useClass: CryptoAdapter },
  ],
  exports: [Hash, HashPassword],
})
export class ProtocolModule {}
