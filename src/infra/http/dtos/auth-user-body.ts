import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class AuthUserBody {
  nickname?: string;

  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @Length(6)
  password: string;
}
