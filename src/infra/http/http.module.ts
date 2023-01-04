import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { DatabaseCreateUser } from '@data/use-cases/db-create-user';
import { AuthController } from './controllers/auth.controller';
import { DatabaseAuthUser } from '@data/use-cases/db-auth-user';
import { DatabaseVerifyUserExist } from '@data/use-cases/db-verify-user-exist';
import { DatabaseVerifyNickOrEmailInUse } from '@data/use-cases/db-verify-nick-or-email-in-use';
import { DatabaseComparePassword } from '@data/use-cases/db-compare-password';
import { ProtocolModule } from '@infra/protocols/protocol.module';
import { DatabaseReadAllUser } from '@data/use-cases/db-read-all-user';
import { DatabaseReadSpecificUser } from '@data/use-cases/db-read-specific-user';
import { DatabaseUpdateUser } from '@data/use-cases/db-update-user';

@Module({
  imports: [DatabaseModule, ProtocolModule],
  controllers: [UserController, AuthController],
  providers: [
    DatabaseCreateUser,
    DatabaseAuthUser,
    DatabaseVerifyUserExist,
    DatabaseVerifyNickOrEmailInUse,
    DatabaseComparePassword,
    DatabaseReadAllUser,
    DatabaseReadSpecificUser,
    DatabaseUpdateUser,
  ],
})
export class HttpModule {}
