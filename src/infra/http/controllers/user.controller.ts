import { DatabaseCreateUser } from '@data/use-cases/db-create-user';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserBody } from '../dtos/create-user-body';
import { UserResponse } from '../dtos/response-user';
import { DatabaseVerifyNickOrEmailInUse } from '@data/use-cases/db-verify-nick-or-email-in-use';
import { DatabaseReadAllUser } from '@data/use-cases/db-read-all-user';
import { DatabaseReadSpecificUser } from '@data/use-cases/db-read-specific-user';
import { UpdateUserBody } from '../dtos/update-user-body';
import { DatabaseUpdateUser } from '@data/use-cases/db-update-user';

@Controller('users')
export class UserController {
  constructor(
    private readonly dbCreateUser: DatabaseCreateUser,
    private readonly dbVerifyNickOrEmailInUse: DatabaseVerifyNickOrEmailInUse,
    private readonly dbReadAllUser: DatabaseReadAllUser,
    private readonly dbReadSpecificUser: DatabaseReadSpecificUser,
    private readonly dbUpdateUser: DatabaseUpdateUser
  ) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { nickname, email, password, cargo, linkedin, github } = body;

    await this.dbVerifyNickOrEmailInUse.exec({ nickname, email });

    const user = await this.dbCreateUser.exec({
      nickname,
      email,
      password,
      cargo,
      linkedin,
      github,
    });

    return new UserResponse(user);
  }

  @Get(':id?')
  async read(@Param('id') id?: string) {
    if (!!id) {
      const user = await this.dbReadSpecificUser.exec({ id });

      return new UserResponse(user);
    }
    const users = await this.dbReadAllUser.exec();
    return users.map((user) => new UserResponse(user));
  }

  @Put(':id')
  async update(@Body() body: UpdateUserBody, @Param('id') id: string) {
    const { nickname, cargo, linkedin, github } = body;

    await this.dbVerifyNickOrEmailInUse.exec({
      nickname,
    });

    const user = await this.dbUpdateUser.exec({
      id,
      nickname,
      cargo,
      linkedin,
      github,
    });

    return new UserResponse(user);
  }
}
