import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserBody {
  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsNotEmpty()
  @IsString()
  cargo: string;

  @IsNotEmpty()
  @IsString()
  linkedin: string;

  @IsNotEmpty()
  @IsString()
  github: string;
}
