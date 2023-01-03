import { CreateProject } from '@domain/use-cases/create-project';

export abstract class ProjectRepository {
  abstract create(data: CreateProject.request): Promise<CreateProject.response>;
}
