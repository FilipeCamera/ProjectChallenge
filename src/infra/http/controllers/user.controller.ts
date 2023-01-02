import { DatabaseCreateUser } from '@data/use-cases/db-create-user';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserBody } from '../dtos/create-user-body';
import { UserResponse } from '../dtos/response-user';

@Controller('users')
export class UserController {
  constructor(private readonly dbCreateUser: DatabaseCreateUser) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { nickname, email, password, cargo, linkedin, github } = body;

    const user = await this.dbCreateUser.create({
      nickname,
      email,
      password,
      cargo,
      linkedin,
      github,
    });

    return new UserResponse(
      user.id,
      user.nickname,
      user.email,
      user.cargo,
      user.linkedIn,
      user.github,
      user.createdAt,
      user.updatedAt
    );
  }
}
