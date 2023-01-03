import { Details } from '@domain/entities/details';
import { CreateProject } from '@domain/use-cases/create-project';

export class DatabaseCreateProject implements CreateProject {
  constructor(private readonly projectRepository: any) {}

  async exec(data: CreateProject.request): Promise<CreateProject.response> {
    const { content, user, isPrivate } = data;

    const details = new Details(content);

    const project = await this.projectRepository.create({
      content: details,
      isPrivate,
      user,
    });

    return project;
  }
}
