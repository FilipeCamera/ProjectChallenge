import { DetailsProps } from '@domain/entities/details';
import { User } from '@domain/entities/user';
import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';

export class CreateProjectBody {
  @IsNotEmptyObject()
  content: DetailsProps;

  @IsNotEmptyObject()
  user: User;

  @IsNotEmpty()
  isPrivate: boolean;
}
