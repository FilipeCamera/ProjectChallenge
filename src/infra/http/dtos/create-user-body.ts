import { IsNotEmpty, IsEmail, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  nickname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6)
  password: string;

  @IsNotEmpty()
  cargo: string;

  linkedin?: string;
  github?: string;
}
