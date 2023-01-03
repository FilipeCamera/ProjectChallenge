import { DetailsProps } from '@domain/entities/details';
import { Project } from '@domain/entities/project';
import { User } from '@domain/entities/user';

export interface CreateProject {
  exec(data: CreateProject.request): Promise<CreateProject.response>;
}

export namespace CreateProject {
  export type request = {
    content: DetailsProps;
    isPrivate: boolean;
    user: User;
  };
  export type response = Project;
}
