import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { DatabaseCreateUser } from '@data/use-cases/db-create-user';
import { CryptoAdapter } from '@infra/adapters/CryptoAdapter';
import { HashPassword } from '@data/protocols/cryptograph';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    DatabaseCreateUser,
    { provide: HashPassword, useClass: CryptoAdapter },
  ],
  exports: [HashPassword],
})
export class HttpModule {}
