import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { DatabaseCreateUser } from '@data/use-cases/db-create-user';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [DatabaseCreateUser],
})
export class HttpModule {}
